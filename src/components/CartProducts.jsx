import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { clearProduct, removeProduct, plusProduct, minusProduct } from '../redux/actions/cart';
import CartTotal from './CartTotal';
import CartItem from './CartItem';

function CartProducts() {
    const dispatch = useDispatch();

    const { items, totalPrice, totalSale } = useSelector(({ cart }) => cart);

    const addedpProducts = Object.keys(items).map((key) => {
        return items[key].items[0];
    });

    const onClickClear = () => {
        if (window.confirm('Очистить корзину?')) dispatch(clearProduct());
    };
    const onRemoveItem = (id) => {
        dispatch(removeProduct(id));
    };
    const onPlusProduct = (id) => {
        dispatch(plusProduct(id));
    };

    const onMinusProduct = (id) => {
        dispatch(minusProduct(id));
    };

    return (
        <section className="ftco-section ftco-cart">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ftco-animate">
                        {totalPrice ? (
                            <div className="cart-list">
                                <table className="table">
                                    <thead className="thead-primary">
                                        <tr className="text-center">
                                            <th
                                                className="deleteCart"
                                                onClick={() => onClickClear()}>
                                                Очистить корзину
                                            </th>
                                            <th>&nbsp;</th>
                                            <th>Продукт</th>
                                            <th>Скидка</th>
                                            <th>Кол-во</th>
                                            <th>Общая стоимость</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {addedpProducts.map((obj, key) => (
                                            <CartItem
                                                key={obj.id}
                                                id={obj.id}
                                                name={obj.title}
                                                img={obj.img}
                                                description={obj.description}
                                                sale={obj.sale}
                                                totalPriceProduct={items[obj.id].totalPrice}
                                                totalCount={items[obj.id].items.length}
                                                onRemove={onRemoveItem}
                                                onPlus={onPlusProduct}
                                                onMinus={onMinusProduct}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="notYet">
                                <h2>
                                    Вы еще ничего не добавили{' '}
                                    <span role="img" aria-label=":(">
                                        🥺
                                    </span>
                                </h2>
                                <img
                                    src="https://image.freepik.com/free-vector/girl-with-long-hair-and-a-laptop-illustration_95397-32.jpg"
                                    alt=""
                                />
                                <p className="blockBut">
                                    <Link className="btn-cart py-3 px-4" to="/shop">
                                        Вернуться назад
                                    </Link>
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                {totalPrice ? <CartTotal totalPrice={totalPrice} totalSale={totalSale} /> : ''}
            </div>
        </section>
    );
}

export default CartProducts;
