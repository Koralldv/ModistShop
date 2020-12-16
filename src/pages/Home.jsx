import React from 'react';

import {
    Header,
    Product,
    About,
    SummerSale,
    Clients,
    Digits,
    Services,
    Subcribe,
} from '../components/';

const trandItems = [
    {
        id: 0,
        img: 'https://colorlib.com/preview/theme/modist/images/product-1.jpg',
        title: 'Young Woman Wearing Dress',
        price: 100,
        sale: 30,
    },
    {
        id: 0,
        img: 'https://colorlib.com/preview/theme/modist/images/product-2.jpg',
        title: 'Young Woman Wearing Dress',
        price: 120,
        sale: 30,
    },
    {
        id: 0,
        img: 'https://colorlib.com/preview/theme/modist/images/product-3.jpg',
        title: 'Young Woman Wearing Dress',
        price: 200,
        sale: 20,
    },
    {
        id: 0,
        img: 'https://colorlib.com/preview/theme/modist/images/product-4.jpg',
        title: 'Young Woman Wearing Dress',
        price: 100,
        sale: '',
    },
    {
        id: 0,
        img: 'https://colorlib.com/preview/theme/modist/images/product-5.jpg',
        title: 'Young Woman Wearing Dress',
        price: 120,
        sale: '',
    },
    {
        id: 0,
        img: 'https://colorlib.com/preview/theme/modist/images/product-6.jpg',
        title: 'Young Woman Wearing Dress',
        price: 130,
        sale: 10,
    },
];

const sliderProduct = {
    spaceBetween: 50,
    slidesPerView: 3,
    loop: true,
    delay: 500,
    speed: 500,
    disableOnInteraction: true,
    pagination: {
        el: '.swiper-paginations',
        clickable: true,
    },
    breakpoints: [1, 1, 2, 2, 3],
};

const sliderClients = {
    spaceBetween: 50,
    slidesPerView: 1,
    loop: true,
    delay: 500,
    speed: 500,
    disableOnInteraction: true,
    pagination: {
        el: '.swiper-paginations',
        clickable: true,
    },
    breakpoints: [1, 1, 1, 1, 1],
};

const about = {
    title: 'Modist Online Fashion Shop',
    paragraph: [
        'On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.',
        'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.',
    ],
};

const clients = [
    {
        id: 0,
        img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlKkKAaLU8LhXF-llf7YHbvEzgHIjxuhSIQw&usqp=CAU',
        title:
            'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.Young Woman Wearing Dress',
        name: 'Roger Scott',
        position: 'Customer',
    },
    {
        id: 1,
        img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlKkKAaLU8LhXF-llf7YHbvEzgHIjxuhSIQw&usqp=CAU',
        title:
            'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.Young Woman Wearing Dress',
        name: 'Roger Scott',
        position: 'Customer',
    },
    {
        id: 2,
        img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlKkKAaLU8LhXF-llf7YHbvEzgHIjxuhSIQw&usqp=CAU',
        title:
            'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.Young Woman Wearing Dress',
        name: 'Roger Scott',
        position: 'Customer',
    },
    {
        id: 3,
        img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlKkKAaLU8LhXF-llf7YHbvEzgHIjxuhSIQw&usqp=CAU',
        title:
            'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.Young Woman Wearing Dress',
        name: 'Roger Scott',
        position: 'Customer',
    },
    {
        id: 4,
        img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlKkKAaLU8LhXF-llf7YHbvEzgHIjxuhSIQw&usqp=CAU',
        title:
            'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.Young Woman Wearing Dress',
        name: 'Roger Scott',
        position: 'Customer',
    },
    {
        id: 5,
        img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlKkKAaLU8LhXF-llf7YHbvEzgHIjxuhSIQw&usqp=CAU',
        title:
            'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.Young Woman Wearing Dress',
        name: 'Roger Scott',
        position: 'Customer',
    },
];

const digits = [
    {
        name: 'Happy Customers',
        amount: 10000,
    },
    {
        name: 'Branches',
        amount: 100,
    },
    {
        name: 'Partner',
        amount: 1000,
    },
    {
        name: 'Awards',
        amount: 100,
    },
];

const services = [
    {
        icon: 'fa-thumbs-up',
        title: 'REFUND POLICY',
        text:
            'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    },
    {
        icon: 'fa-archive',
        title: 'PREMIUM PACKAGING',
        text:
            'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    },
    {
        icon: 'fa-line-chart',
        title: 'SUPERIOR QUALITY',
        text:
            'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.',
    },
];

const summerSales = 'SUMMER SALE';

function Home() {
    return (
        <div>
            <Header />
            <div className="goto-here"></div>
            <Product trandItems={trandItems} sliderProduct={sliderProduct} />
            <About about={about} />
            <SummerSale summerSales={summerSales} />
            <Clients sliderClients={sliderClients} clients={clients} />
            <Digits digits={digits} />
            <Services service={services} />
            <Subcribe />
        </div>
    );
}

export default Home;
