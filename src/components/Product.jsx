import React from 'react';
import { Link } from 'react-router-dom';
import ProductSlider from './ProductSlider';
import Titles from './Titles';

import Fade from 'react-reveal/Fade';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

const titles = {
    big: 'Trending',
    small: 'Trending',
};

function Product({ trandItems, sliderProduct }) {
    SwiperCore.use([Pagination]);
    SwiperCore.use([Autoplay]);
    return (
        <section className="ftco-section ftco-product">
            <Fade bottom duration={1500}>
                <Titles titles={titles} />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="product-slider ftco-animate">
                                <Swiper
                                    spaceBetween={sliderProduct.spaceBetween}
                                    slidesPerView={sliderProduct.slidesPerView}
                                    loop={sliderProduct.loop}
                                    speed={sliderProduct.speed}
                                    breakpoints={{
                                        320: {
                                            slidesPerView: sliderProduct.breakpoints[0],
                                        },
                                        480: {
                                            slidesPerView: sliderProduct.breakpoints[1],
                                        },
                                        768: {
                                            slidesPerView: sliderProduct.breakpoints[2],
                                        },
                                        1025: {
                                            slidesPerView: sliderProduct.breakpoints[3],
                                        },
                                        1440: {
                                            slidesPerView: sliderProduct.breakpoints[4],
                                        },
                                    }}
                                    autoplay={{
                                        delay: sliderProduct.delay,
                                        disableOnInteraction: sliderProduct.disableOnInteraction,
                                    }}
                                    scrollbar={{ draggable: false }}
                                    pagination={sliderProduct.pagination}>
                                    {trandItems.map(function (item, i) {
                                        return (
                                            <SwiperSlide key={i}>
                                                <Link to="shop">
                                                    <ProductSlider item={item} key={i} />
                                                </Link>
                                            </SwiperSlide>
                                        );
                                    })}
                                    <div className="swiper-paginations"></div>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default Product;
