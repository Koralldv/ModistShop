import React from 'react';

function CartTotal({ totalPrice, totalSale }) {
    return (
        <div className="row justify-content-end">
            <div className="col col-lg-5 col-md-6 mt-5 cart-wrap ftco-animate">
                <div className="cart-total mb-3">
                    <h3>Cart Totals</h3>
                    <p className="d-flex">
                        <span>Subtotal</span>
                        <span>{totalPrice}$</span>
                    </p>
                    <p className="d-flex">
                        <span>Delivery</span>
                        <span>$0.00</span>
                    </p>
                    <p className="d-flex">
                        <span>Discount</span>
                        <span>${totalSale}</span>
                    </p>
                    <hr></hr>
                    <p className="d-flex total-price">
                        <span>Total</span>
                        <span>${totalPrice - totalSale}</span>
                    </p>
                    <p className="text-center">
                        <a href="checkout.html" className="btn btn-primary py-3 px-4">
                            Proceed to Checkout
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CartTotal;
