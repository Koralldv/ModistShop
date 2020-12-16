import React from 'react';
import IosArrowDown from 'react-ionicons/lib/IosArrowDown';
import Fade from 'react-reveal/Fade';

class Header extends React.Component {
    render() {
        return (
            <div className="hero-wrap">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
                        <h3 className="v">Modist - Time to get dress</h3>
                        <h3 className="vr">Since - 1985</h3>
                        <Fade bottom duration={1500}>
                            <div className="col-md-11 ftco-animate text-center text-head">
                                <h1>Le Stylist</h1>
                                <h2>
                                    <span>Wear Your Dress</span>
                                </h2>
                            </div>
                        </Fade>
                    </div>
                    <div className="mouse">
                        <div className="mouse-icon">
                            <div className="mouse-wheel">
                                <IosArrowDown fontSize="24px" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
