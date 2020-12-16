import React from 'react';

function ProductSlider({ item, i }) {
    return (
        <div className="item" key={i}>
            <div className="product">
                {/* <a href="#" className="img-prod"> */}
                <img className="img-fluid" src={item.img} alt="Colorlib Template" />
                {item.sale ? <span className="status">{item.sale}%</span> : ''}
                {/* </a> */}
                <div className="text pt-3 px-3">
                    <h3>
                        {/* <a href="#"> */}
                        {item.title}
                        {/* </a> */}
                    </h3>
                    <div className="d-flex">
                        <div className="pricing">
                            <p className="price">
                                {item.sale ? (
                                    <span className="mr-2 price-dc">${item.price}.00</span>
                                ) : (
                                    ''
                                )}
                                <span className="mr-2 price-dc"></span>
                                <span className="price-sale">
                                    ${item.price - (item.price / 100) * item.sale}.00
                                </span>
                            </p>
                        </div>
                        <div className="rating">
                            <p className="text-right">
                                <span className="ion-ios-star-outline"></span>
                                <span className="ion-ios-star-outline"></span>
                                <span className="ion-ios-star-outline"></span>
                                <span className="ion-ios-star-outline"></span>
                                <span className="ion-ios-star-outline"></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductSlider;
