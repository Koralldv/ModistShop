import React from 'react';
import IosHeartOutline from 'react-ionicons/lib/IosHeartOutline';
import IosAdd from 'react-ionicons/lib/IosAdd';
import { Link } from 'react-router-dom';

import SortPopup from './SortPopup';
import Titles from './Titles';
import ProductsLoading from './ProductsBlock/LoadingBlock';

const titles = {
    big: 'Products',
    small: 'Our Products',
};

const sortItems = [
    { name: 'популярности', type: 'popular', order: 'asc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'title', order: 'asc' },
];

const OurProducts = React.memo(function OurProducts({
    OurProductsItems,
    categoriesСlothes,
    activeCategoreis,
    activeSortBy,
    onSelectCategory,
    onSelectSortBy,
    isLoaded,
    onClickAddProduct,
}) {
    const onAddProduct = (item) => {
        onClickAddProduct({ item });
    };

    return (
        <section className="ftco-section bg-light">
            <Titles titles={titles} />
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <div className="widget-catagory col-sm col-md-3 col-lg-3">
                        <h6 className="widget-title mb-30">Категории</h6>
                        <div className="catagories-menu">
                            <ul className="menu-shop">
                                <li className="menuli" id="all">
                                    <span
                                        className={activeCategoreis === null ? 'activeCat' : ''}
                                        onClick={() => onSelectCategory(null)}>
                                        All
                                    </span>
                                </li>
                                {categoriesСlothes.type.map((item, i) => {
                                    return (
                                        <li className="menuli" key={`${item + i}`}>
                                            <div className="menu-titles">{item.title}</div>
                                            <ul className="sub-menu-shop" id="clothing">
                                                {item.list.map((item, i) => {
                                                    return (
                                                        <li
                                                            key={`${item}_${i}`}
                                                            className={`${
                                                                activeCategoreis === i
                                                                    ? 'activeCat'
                                                                    : ''
                                                            }`}
                                                            onClick={() => onSelectCategory(item)}>
                                                            {item}
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="d-flex justify-content-around">
                            <div className="total-products">
                                <span>
                                    <b>{OurProductsItems.length}</b> продуктов
                                </span>
                            </div>
                            <div className="AllFilter">
                                <SortPopup
                                    items={sortItems}
                                    activeSortBy={activeSortBy}
                                    onSelectSortBy={onSelectSortBy}
                                />
                            </div>
                        </div>

                        <div className="row">
                            {isLoaded
                                ? OurProductsItems.map((item, i) => (
                                      <div
                                          className="col-sm col-md-6 col-lg-4 ftco-animate"
                                          key={`${item}_${i}`}>
                                          <div className="product">
                                              {/* <Link to={`/shop/${i}`}> */}
                                              <div className="img-prod">
                                                  <img
                                                      className="img-fluid"
                                                      src={item.img}
                                                      alt="Colorlib Template"
                                                  />
                                                  {item.sale ? (
                                                      <span className="status">{item.sale}%</span>
                                                  ) : (
                                                      ''
                                                  )}
                                              </div>
                                              {/* </Link> */}
                                              <div className="text py-3 px-3">
                                                  <h3>
                                                      <b>{item.title}</b>
                                                  </h3>
                                                  <div className="d-flex">
                                                      <div className="pricing">
                                                          <p className="price">
                                                              {item.sale ? (
                                                                  <span className="mr-2 price-dc">
                                                                      ${item.price}.00
                                                                  </span>
                                                              ) : (
                                                                  ''
                                                              )}
                                                              <span className="mr-2 price-dc"></span>
                                                              <span className="price-sale">
                                                                  $
                                                                  {item.price -
                                                                      (item.price / 100) *
                                                                          item.sale}
                                                                  .00
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
                                                  <hr></hr>
                                                  <p className="bottom-area d-flex">
                                                      <span
                                                          className="add-to-cart"
                                                          onClick={() => onAddProduct(item)}>
                                                          <span>Add to cart</span>
                                                          <IosAdd
                                                              className="iosAdd"
                                                              fontSize="18px"
                                                          />
                                                      </span>
                                                      <span className="ml-auto heart">
                                                          <span>
                                                              <IosHeartOutline fontSize="16px" />
                                                          </span>
                                                      </span>
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                  ))
                                : Array(9)
                                      .fill(0)
                                      .map((_, index) => <ProductsLoading key={index} />)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default OurProducts;
