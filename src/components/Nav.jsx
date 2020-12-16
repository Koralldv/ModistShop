import React from 'react';
import { useSelector } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

function Nav({ nav }) {
    const handleScroll = () => {
        if (window.scrollY < 200) {
            setScrollHeader(false);
        } else if (window.scrollY > 53) {
            setScrollHeader(true);
        }
    };

    const [scrollHeader, setScrollHeader] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    const { totalCount } = useSelector(({ cart }) => ({
        totalCount: cart.totalCount,
    }));

    return (
        <nav
            className={`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light
            ${scrollHeader ? 'scrolled awake' : ''}
			`}
            // ${styleNav === 'inside' ? 'ftco-navbar-light-2' : ''}
            id="ftco-navbar">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Modist
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#ftco-nav"
                    aria-controls="ftco-nav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        {nav.map((item, i) => (
                            <div className="nav-item" key={`item${i}`}>
                                <Link
                                    to={item.link === 'home' ? '/' : `/${item.link}`}
                                    className="nav-link">
                                    {item.title}
                                </Link>
                            </div>
                        ))}
                        <li className="nav-item cta cta-colored">
                            <Link to={'/cart'} className="nav-link">
                                <i className="fa fa-shopping-cart"></i>
                                &nbsp;{totalCount}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
