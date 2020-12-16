import React from 'react';
import { Link } from 'react-router-dom';

import LoadingPosts from './ProductsBlock/LoadingPosts';
function BlogCards({ items, isLoaded, onOnePost }) {
    const handleOnePost = (index) => {
        onOnePost(index);
    };

    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row d-flex">
                    {isLoaded
                        ? items.map((items, i) => (
                              <div className="col-md-4 d-flex ftco-animate">
                                  <div className="blog-entry sizeBlog">
                                      <Link
                                          to={`/blog/${items.id}`}
                                          onClick={() => handleOnePost(i)}>
                                          <div
                                              className="block-20"
                                              style={{
                                                  backgroundImage: `url(${items.img})`,
                                              }}></div>
                                          <div className="text mt-3 d-block pl-md-5">
                                              {/* <h2 className="heading mt-3 headHover">
                                                {items.title}
                                            </h2> */}
                                              <h3 className="heading mt-3 headHover">
                                                  {items.title}
                                              </h3>
                                              <div className="meta mb-3">
                                                  {items.date}
                                                  <div>
                                                      {/* <a href="#" className="meta-chat">
                                                          <span className="icon-chat"></span>
                                                      </a> */}
                                                  </div>
                                              </div>
                                          </div>
                                      </Link>
                                  </div>
                              </div>
                          ))
                        : Array(9)
                              .fill(0)
                              .map((_, index) => <LoadingPosts key={index} />)}
                </div>
                <div className="row mt-5">
                    <div className="col text-center">
                        <div className="block-27">
                            {/* <ul>
                                <li>
                                    <a href="#">&lt;</a>
                                </li>
                                <li classNameName="active">
                                    <span>1</span>
                                </li>
                                <li>
                                    <a href="#">2</a>
                                </li>
                                <li>
                                    <a href="#">3</a>
                                </li>
                                <li>
                                    <a href="#">4</a>
                                </li>
                                <li>
                                    <a href="#">5</a>
                                </li>
                                <li>
                                    <a href="#">&gt;</a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogCards;
