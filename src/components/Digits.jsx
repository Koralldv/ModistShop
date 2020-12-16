import React from 'react';

import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';
import Fade from 'react-reveal/Fade';

class Digits extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            odometerValue: [0, 0, 0, 0],
        };
    }

    componentDidMount() {
        this.setState({
            odometerValue: this.props.digits.map((item) => item.amount),
        });
    }

    render() {
        const { odometerValue } = this.state;
        const { digits } = this.props;
        return (
            <section className="ftco-section ftco-counter img difitsImg" id="section-counter">
                <div className="container">
                    <div className="row justify-content-center py-5">
                        <div className="col-md-10">
                            <Fade bottom>
                                <div className="row">
                                    {digits.map((item, i) => (
                                        <div
                                            className="col-md-3 d-flex justify-content-center counter-wrap ftco-animate"
                                            key={`${item}_${i}`}>
                                            <div className="block-18 text-center">
                                                <div className="text">
                                                    <strong className="number">
                                                        <Odometer
                                                            format="d"
                                                            duration={2500}
                                                            value={odometerValue[i]}
                                                        />
                                                    </strong>
                                                    <span>{item.name}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Digits;
