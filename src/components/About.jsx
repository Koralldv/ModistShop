import React from 'react';
import MdPlay from 'react-ionicons/lib/MdPlay';
import Fade from 'react-reveal/Fade';

import { Popup } from './';

function About({ about }) {
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const onClickPopup = () => {
        setVisiblePopup(!visiblePopup);
    };
    return (
        <section className="ftco-section ftco-no-pb ftco-no-pt bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 p-md-5 img img-2 d-flex justify-content-center align-items-center aboutImg">
                        {visiblePopup ? <Popup onClickPopup={() => onClickPopup()} /> : ''}
                        <div
                            className="icon popup-vimeo d-flex justify-content-center align-items-center"
                            onClick={() => setVisiblePopup(!visiblePopup)}>
                            <MdPlay color="white" fontSize="29px" />
                        </div>
                    </div>
                    <Fade bottom duration={1500}>
                        <div className="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
                            <div className="heading-section-bold mb-5 mt-md-5">
                                <div className="ml-md-0">
                                    <h2 className="mb-4">{about.title}</h2>
                                </div>
                            </div>
                            <div className="pb-md-5">
                                {about.paragraph.map(function (item, i) {
                                    return <p key={i}>{item}</p>;
                                })}
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
}

export default About;
