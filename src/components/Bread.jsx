import React from 'react';
import { Link } from 'react-router-dom';

class Bread extends React.Component {
    state = {
        activeItem: 0,
        fixedNav: null,
        styleNav: 'home',
    };

    componentDidMount() {
        window.addEventListener('click', this.handlClick);
        this.handlClick();
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.handlClick);
        this.handlClick();
    }

    handlClick = () => {
        if (window.location.pathname !== '/') {
            this.setState({
                styleNav: 'inside',
            });
        } else {
            this.setState({
                styleNav: 'home',
            });
        }
    };

    render() {
        const { bread } = this.props;
        return (
            <div
                className={`${
                    this.state.styleNav === 'inside' ? 'hero-wrap-inside' : 'hero-wrap'
                } hero-bread `}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center">
                            <h1 className="mb-0 bread">{bread.title}</h1>
                            <p className="breadcrumbs">
                                <span className="mr-2">
                                    <Link to="/">Home</Link>
                                </span>
                                <span>
                                    {bread.link.length > 1
                                        ? bread.link.map((items, i) => {
                                              if (i === 0) {
                                                  return (
                                                      <Link to={`/${items.toLowerCase()}`} key={i}>
                                                          {` ${items} `}
                                                      </Link>
                                                  );
                                              }
                                              return items;
                                          })
                                        : bread.link}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bread;
