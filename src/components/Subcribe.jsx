import React from 'react';
import Fade from 'react-reveal/Fade';

import Titles from './Titles';
const titles = {
    big: 'Services',
    small: 'We want you to express yourself',
};

function Subcribe() {
    return (
        <section className="ftco-section">
            <Fade bottom duration={1000}>
                <Titles titles={titles} />
                <div className="parallax-img d-flex align-items-center">
                    <div className="container">
                        <div className="row d-flex justify-content-center py-5">
                            <div className="col-md-7 text-center heading-section ftco-animate">
                                <div className="row d-flex justify-content-center mt-5">
                                    <div className="col-md-8">
                                        <form className="subscribe-form">
                                            <div className="form-group d-flex">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter email address"
                                                />
                                                <input
                                                    type="submit"
                                                    value="Subscribe"
                                                    className="submit px-3"
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default Subcribe;
