import React from 'react';

import MdQuote from 'react-ionicons/lib/MdQuote';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Fade from 'react-reveal/Fade';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

function Clients({ sliderClients, clients }) {
    SwiperCore.use([Pagination]);
    SwiperCore.use([Autoplay]);
    return (
        <section className="ftco-section testimony-section bg-light">
            <Fade bottom cascade>
                <div className="container">
                    <div className="row justify-content-center mb-3 pb-3">
                        <div className="col-md-12 heading-section text-center ftco-animate">
                            <h1 className="big">Testimony</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8 ftco-animate">
                            <div className="row ftco-animate">
                                <div className="col-md-12">
                                    <div className="carousel-testimony owl-carousel ftco-owl">
                                        <Swiper
                                            spaceBetween={sliderClients.spaceBetween}
                                            slidesPerView={sliderClients.slidesPerView}
                                            loop={sliderClients.loop}
                                            speed={sliderClients.speed}
                                            breakpoints={{
                                                320: {
                                                    slidesPerView: sliderClients.breakpoints[0],
                                                },
                                                480: {
                                                    slidesPerView: sliderClients.breakpoints[1],
                                                },
                                                768: {
                                                    slidesPerView: sliderClients.breakpoints[2],
                                                },
                                                1025: {
                                                    slidesPerView: sliderClients.breakpoints[3],
                                                },
                                                1440: {
                                                    slidesPerView: sliderClients.breakpoints[4],
                                                },
                                            }}
                                            autoplay={{
                                                delay: sliderClients.delay,
                                                disableOnInteraction:
                                                    sliderClients.disableOnInteraction,
                                            }}
                                            scrollbar={{ draggable: false }}
                                            pagination={sliderClients.pagination}>
                                            {clients.map(function (item, i) {
                                                return (
                                                    <SwiperSlide key={i}>
                                                        <div className="item">
                                                            <div className="testimony-wrap py-4 pb-5">
                                                                <div className="user-img mb-4">
                                                                    <img
                                                                        src={item.img}
                                                                        className="clientsImg"
                                                                        alt=""
                                                                    />
                                                                    <span className="quote d-flex align-items-center justify-content-center">
                                                                        <MdQuote color="#999999" />
                                                                    </span>
                                                                </div>
                                                                <div className="text text-center">
                                                                    <p className="mb-4">
                                                                        A small river named Duden
                                                                        flows by their place and
                                                                        supplies it with the
                                                                        necessary regelialia. It is
                                                                        a paradisematic country, in
                                                                        which roasted parts of
                                                                        sentences fly into your
                                                                        mouth.
                                                                    </p>
                                                                    <p className="name">
                                                                        Roger Scott
                                                                    </p>
                                                                    <span className="position">
                                                                        Customer
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                );
                                            })}
                                            <div className="swiper-paginations"></div>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default Clients;
