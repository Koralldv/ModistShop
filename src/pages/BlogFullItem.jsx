import React from 'react';
import { useSelector } from 'react-redux';

import Bread from '../components/Bread';

function BlogFullItem() {
    const index = window.location.href.split('')[window.location.href.split('').length - 1];
    const items = useSelector(({ posts }) => posts.items);

    const bread = {
        title: 'Блог',
        link: ['Blog', `${items[index].title}`],
    };

    return (
        <div>
            <Bread bread={bread} />
            <div className="container">
                <section className="ftco-section ftco-degree-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 ftco-animate">
                                <h2 className="mb-3">{items[index].title}</h2>
                                <p>{items[index].description}</p>
                                <p>
                                    <img src={items[index].img} alt="" className="img-fluid" />
                                </p>
                                <p>{items[index].text}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default BlogFullItem;
