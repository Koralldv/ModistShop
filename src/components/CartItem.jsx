import React from 'react';

function CartItem({
    id,
    name,
    img,
    description,
    sale,
    totalPriceProduct,
    totalCount,
    onRemove,
    onPlus,
    onMinus,
}) {
    const handlRemove = (id) => {
        onRemove(id);
    };

    const handlPlus = () => {
        onPlus(id);
    };

    const handlMinus = () => {
        onMinus(id);
    };

    return (
        <tr className="text-center">
            <td className="product-remove" onClick={() => handlRemove(id)}>
                <b>
                    <span className="fa fa-close"></span>
                </b>
            </td>
            <td className="image-prod">
                <div className="img cartImg">
                    <img src={`${img}`} alt="" />
                </div>
            </td>

            <td className="product-name">
                <h3>{name}</h3>
                <p>{description}</p>
            </td>

            <td className="price">{sale}%</td>

            <td className="quantityFl">
                <i className="fa fa-minus quantity-left-minus" onClick={handlMinus}></i>
                <div className="catrCount">{totalCount}</div>
                <i className="fa fa-plus quantity-right-plus" onClick={handlPlus}></i>
            </td>

            <td className="total">${totalPriceProduct - (totalPriceProduct / 100) * sale}</td>
        </tr>
    );
}

export default CartItem;
