import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Fade from 'react-reveal/Fade';

import Titles from './Titles';

const titles = {
    big: 'Services',
    small: 'We want you to express yourself',
};

function Services({ service }) {
    return (
        <section className="ftco-section bg-light ftco-services">
            <Titles titles={titles} />
            <div className="container">
                <Fade bottom duration={1000} cascade>
                    <div className="row">
                        {service.map(function (item, i) {
                            return (
                                <div
                                    className="col-md-4 text-center d-flex align-self-stretch ftco-animate"
                                    key={`${item}_${i}`}>
                                    <div className="media block-6 services">
                                        <div className="icon d-flex justify-content-center align-items-center mb-4">
                                            <i className={`fa serviceIcon ${item.icon}`}></i>
                                        </div>
                                        <div className="media-body">
                                            <h3 className="heading">{item.name}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Fade>
            </div>
        </section>
    );
}

export default Services;
