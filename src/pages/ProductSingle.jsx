import React from 'react';
import { useSelector } from 'react-redux';
import { Bread, Subcribe } from '../components';

// import { addProduct, singleProduct } from '../redux/actions/cart';
function ProductSingle() {
    const singleProduct = {
        title: 'Шмотка такая',
        description: 'Шмотка ваще классная',
        fullDescription: 'Шмотка ваще топ конечно, вот почему',
        img: 'https://colorlib.com/preview/theme/modist/images/product-1.jpg',
        price: 100,
        size: 0,
    };

    const bread = {
        title: 'Single',
        link: ['Shop', singleProduct.title],
    };

    const index = window.location.href.split('')[window.location.href.split('').length - 1];
    const items = useSelector(({ products }) => products.items);
    return (
        <div>
            <Bread bread={bread} />
            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5 ftco-animate">
                            <img
                                src={items[index].img}
                                className="img-fluid"
                                alt="Colorlib Template"
                            />
                        </div>
                        <div className="col-lg-6 product-details pl-md-5 ftco-animate">
                            <h3>{items[index].title}</h3>
                            <p className="price">
                                <span>${items[index].price}</span>
                            </p>
                            <p>{items[index].description}</p>
                            <p>{items[index].fullDescription}</p>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <div className="form-group d-flex">
                                        <div className="select-wrap">
                                            <div className="icon">
                                                <span className="ion-ios-arrow-down"></span>
                                            </div>
                                            <select name="" id="" className="form-control">
                                                <option value="">Small</option>
                                                <option value="">Medium</option>
                                                <option value="">Large</option>
                                                <option value="">Extra Large</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-100"></div>
                                <div className="input-group col-md-6 d-flex mb-3">
                                    <span className="input-group-btn mr-2">
                                        <button
                                            type="button"
                                            className="quantity-left-minus btn"
                                            data-type="minus"
                                            data-field="">
                                            <i className="ion-ios-remove"></i>
                                        </button>
                                    </span>
                                    <input
                                        type="text"
                                        id="quantity"
                                        name="quantity"
                                        className="form-control input-number"
                                        defaultValue="1"
                                        min="1"
                                        max="100"
                                    />
                                    <span className="input-group-btn ml-2">
                                        <button
                                            type="button"
                                            className="quantity-right-plus btn"
                                            data-type="plus"
                                            data-field="">
                                            <i className="ion-ios-add"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <p>
                                <a href="cart.html" className="btn btn-primary py-3 px-5">
                                    Add to Cart
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Subcribe />
        </div>
    );
}

export default ProductSingle;
