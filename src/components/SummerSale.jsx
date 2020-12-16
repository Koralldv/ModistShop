import React from 'react';
import Fade from 'react-reveal/Fade';

function SummerSale({ summerSales }) {
    return (
        <section className="ftco-section ftco-section-more img summerImg">
            <div className="container">
                <div className="row justify-content-center mb-3 pb-3">
                    <div className="col-md-12 heading-section ftco-animate">
                        <Fade bottom duration={1500}>
                            <h2>{summerSales}</h2>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SummerSale;
