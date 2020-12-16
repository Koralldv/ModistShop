import React from 'react';

import { Map, FormContact, InfoContact, Subcribe, Bread } from '../components';

const infoItems = [
    {
        title: 'Adress',
        content: '198 West 21th Street, Suite 721 New York NY 10016',
        isLink: 0,
    },
    {
        title: 'Phone',
        content: '+ 1235 2355 98',
        isLink: 1,
    },
    {
        title: 'Email',
        content: 'koralldv@gmail.com',
        isLink: 1,
    },
    {
        title: 'Website ',
        content: 'koralldv.com',
        isLink: 1,
    },
];

const bread = {
    title: 'Контакты',
    link: ['Contact'],
};

class ContactPage extends React.Component {
    render() {
        return (
            <div>
                <Bread bread={bread} />
                <section className="ftco-section contact-section bg-light">
                    <div className="container">
                        <div className="row block-9">
                            <FormContact />
                            <Map />
                        </div>
                        <InfoContact infoItems={infoItems} />
                    </div>
                </section>
                <Subcribe />
            </div>
        );
    }
}

export default ContactPage;
