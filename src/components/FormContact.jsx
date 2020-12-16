import React from 'react';

import { useState, useEffect } from 'react';

function FormContact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);

    const [nameError, setNameError] = useState('Имя не может быть пустым');
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [phoneError, setPhoneError] = useState('Телефон не может быть пустым');

    const [fromVal, setfromVal] = useState(false);

    useEffect(() => {
        if (nameError || emailError || phoneError) {
            setfromVal(false);
        } else {
            setfromVal(true);
        }
    }, [nameError, emailError, phoneError]);

    const namehandler = (e) => {
        setName(e.target.value);
        if (!e.target.value) {
            setNameError('Имя не может быть пустым');
        } else {
            setNameError('');
        }
    };

    const phonehandler = (e) => {
        setPhone(e.target.value);
        if (!e.target.value) {
            setPhoneError('Телефон не может быть пустым');
        } else {
            setPhoneError('');
        }
    };

    const emailhandler = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный Email');
        } else {
            setEmailError('');
        }
    };

    const blurHandle = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true);
                break;
            case 'email':
                setEmailDirty(true);
                break;
            case 'phone':
                setPhoneDirty(true);
                break;
        }
    };

    return (
        <div className="col-md-6 order-md-last d-flex">
            <form className="bg-white p-5 contact-form">
                {nameDirty && nameError && <div style={{ color: 'red' }}>{nameError}</div>}
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Имя"
                        value={name}
                        onChange={(e) => namehandler(e)}
                        onBlur={(e) => blurHandle(e)}
                    />
                </div>
                {emailDirty && emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                <div className="form-group">
                    <input
                        onChange={(e) => emailhandler(e)}
                        value={email}
                        onBlur={(e) => blurHandle(e)}
                        name="email"
                        type="text"
                        className="form-control"
                        placeholder="Email"
                    />
                </div>
                {phoneDirty && phoneError && <div style={{ color: 'red' }}>{phoneError}</div>}
                <div className="form-group">
                    <input
                        onChange={(e) => phonehandler(e)}
                        value={phone}
                        onBlur={(e) => blurHandle(e)}
                        name="phone"
                        type="text"
                        className="form-control"
                        placeholder="Телефон"
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="7"
                        className="form-control"
                        placeholder="Message"></textarea>
                </div>
                <div className="form-group">
                    <input
                        disabled={!fromVal}
                        type="submit"
                        value="Send Message"
                        className="btn btn-primary py-3 px-5"
                    />
                </div>
            </form>
        </div>
    );
}

export default FormContact;
