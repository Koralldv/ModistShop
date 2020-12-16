import React from 'react';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
// import PostsListAction from '../redux/actions/posts';

function Full({ title }) {
    // const dispatch = useDispatch();

    const items = useSelector(({ posts }) => posts.items);
    return (
        <div>
            {console.log(items)}
            {/* <section className="ftco-section ftco-degree-bg">
                <Bread bread={bread} />
                {console.log(items.title)}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 ftco-animate">
                            <h2 className="mb-3">{title}</h2>
                            {console.log(title)}
                            fwfwef
                            {items}
                            <p>{createAt.description}</p>
                            <p><img src={createAt.img} alt="" className="img-fluid" /></p>
                            <p>{createAt.text}</p>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
}

export default Full;
