import React from 'react';
import { Link } from 'react-router-dom';

import nfPic from '../images/notFound.png';

function NotFound() {
    return (
        <div className="ftco-section ftco-pb ftco-pt bg-light">
            <div className="container">
                <div className="row flex justify-content-center">
                    <div className="col-sm-12 col-md-12 col-lg-6 ops d-flex flex-column justify-content-center align-items-start">
                        <h2 className="h2">Oooops!</h2>
                        <h3 className="h2">
                            Извините, но страницы по этому адресу не существует{' '}
                            <span role="img" aria-label=":(">
                                🥺
                            </span>
                        </h3>
                        <div className="blockBut">
                            <Link to={'/'} className="btn-cart py-3 px-4">
                                На главную
                            </Link>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center nfPic">
                        <img src={nfPic} alt="" className="nfPic" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
