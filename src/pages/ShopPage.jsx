import React from 'react';

import { OurProducts, Bread, Subcribe } from '../components';

import { useSelector, useDispatch } from 'react-redux';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchProducts } from '../redux/actions/products';
import { addProduct } from '../redux/actions/cart';

const bread = {
    title: 'Магазин',
    link: ['Shop'],
};

const categoriesСlothes = {
    type: [
        {
            title: 'ОДЕЖДА',
            list: ['Bodysuits', 'Dresses', 'Hoodies Sweats', 'Jackets Coats', 'Jeans'],
        },
        {
            title: 'ОБУВЬ',
            list: ['Bodysuits1', 'Dresses1', 'Hoodies Sweats1', 'Jackets Coats1', 'Jeans1'],
        },
        {
            title: 'АКСЕССУАРЫ',
            list: ['Bodysuits2', 'Dresses2', 'Hoodies Sweats2', 'Jackets Coats2', 'Jeans2'],
        },
    ],
};

function ShopPage() {
    const dispatch = useDispatch();
    const items = useSelector(({ products }) => products.items);
    const isLoaded = useSelector(({ products }) => products.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);

    React.useEffect(() => {
        dispatch(fetchProducts(category, sortBy));
    }, [category, sortBy]);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortBy = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    const handleAddProductToCart = (obj) => {
        dispatch(addProduct(obj.item));
    };

    return (
        <div>
            <Bread bread={bread} />
            <OurProducts
                OurProductsItems={items}
                isLoaded={isLoaded}
                categoriesСlothes={categoriesСlothes}
                activeSortBy={sortBy.type}
                activeCategoreis={category}
                onSelectCategory={onSelectCategory}
                onSelectSortBy={onSelectSortBy}
                onClickAddProduct={(obj) => handleAddProductToCart(obj)}
            />
            <Subcribe />
        </div>
    );
}

export default ShopPage;
