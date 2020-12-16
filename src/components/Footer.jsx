import React from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Fade from 'react-reveal/Fade';

class Footer extends React.Component {
    render() {
        const { footerItems } = this.props;
        return (
            <footer className="ftco-footer bg-light ftco-section">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">{footerItems.title}</h2>
                                <Fade bottom cascade>
                                    <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                                        {footerItems.links.map((item, i) => (
                                            <li className="ftco-animate" key={`${item}_${i}`}>
                                                <a href={`${item.link}`}>
                                                    <span className={`fa ${item.icon}`}></span>
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </Fade>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4 ml-md-5">
                                <h2 className="ftco-heading-2">Menu</h2>
                                <ul className="list-unstyled">
                                    {footerItems.menu.map((item, i) => (
                                        <li key={`${item.title}_${i}`}>
                                            <Link
                                                to={item.link === 'home' ? '/' : item.link}
                                                className="py-2 d-block">
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">Help</h2>
                                <div className="d-flex">
                                    <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                                        {footerItems.help.map((item, i) => (
                                            <li key={`${item}_${i}`}>
                                                <Link
                                                    to={item === 'home' ? '/' : item.link}
                                                    className="py-2 d-block">
                                                    {item.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="ftco-footer-widget mb-4">
                                <h2 className="ftco-heading-2">{footerItems.titleContacts}</h2>
                                <div className="block-23 mb-3">
                                    <ul>
                                        {footerItems.contacts.map((item, i) => (
                                            <li key={`${item}_${i}`}>
                                                <i
                                                    className={`footerContactsIcon fa ${item.icon}`}></i>
                                                <span className="text">{item.content}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>
                                Copyright &copy;All rights reserved | This template is made with{' '}
                                <i className="fa fa-heart"></i> by{' '}
                                <a href="https://koralldv.com">KorallDv</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
