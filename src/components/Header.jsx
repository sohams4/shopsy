import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ bagItems, isAuthenticated, user }) => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = React.useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search/${searchQuery}`);
    }

    return (
        <>
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid px-4 py-2">
                    <NavLink className="navbar-brand font-color position-relative" to="/">
                       Shopsy
                        <span className="position-absolute top-0 start-50 translate-middle fs-6">
                            <i className="ai ai-crown-fill bag"></i>
                        </span>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse row navbarNav" id="navbarNav">
                        <ul className="navbar-nav col-sm-8 justify-content-end">
                            <form onSubmit={handleSearch} className="search d-flex w-75 m-1" role="search">
                                <input className="form-control me-2 w-100 bg-color border-0" type="search"
                                       placeholder="&#xF002; Search" aria-label="Search"
                                       onChange={(e) => setSearchQuery(e.target.value)} />
                                <button className="btn font-color visually-hidden" type="submit">search</button>
                            </form>
                        </ul>
                        <ul className="navbar-nav col-sm-4 font-color justify-content-end">
                            {!isAuthenticated ? (
                                <Link to="/login" className="btn nav-link font-color bg-color px-4 py-2 mx-2 text-uppercase"
                                      style={{ fontSize: '0.88rem' }}>Login</Link>
                            ) : (
                                user.role === "admin" ? (
                                    <Link to="/admin" className="btn nav-link font-color bg-color px-4 py-2 mx-2 text-uppercase"
                                          style={{ fontSize: '0.88rem' }}>Dashboard</Link>
                                ) : (
                                    <Link to="/profile" className="btn nav-link font-color bg-color px-4 py-2 mx-2 text-uppercase"
                                          style={{ fontSize: '0.88rem' }}>Profile</Link>
                                )
                            )}
                            <Link to="/bag" className="py-1 text-center text-decoration-none">
                                <span className="fas mx-2 fs-4 bag position-relative">&#xf290;
                                    <span className='position-absolute translate-middle ms-1 fs-6 login-heading small-font'></span>
                                </span>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Secondary navigation bar */}
            <nav className="navbar navbar-expand-md container-fluid p-0">
                <div className="collapse navbar-collapse row m-0 navbarNav" id="navbarNav">
                    <ul className="navbar-nav col-sm-12 justify-content-center">
                        <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
                        <li className="nav-item"><NavLink to="/shop" className="nav-link">Shop</NavLink></li>
                        <li className="nav-item dropdown">
                            <NavLink to="/women" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Women</NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink to="/women/all" className="dropdown-item">All Products</NavLink></li>
                                <li><NavLink to="/women/dresses" className="dropdown-item">Dresses</NavLink></li>
                                <li><NavLink to="/women/pants" className="dropdown-item">Pants</NavLink></li>
                                <li><NavLink to="/women/skirts" className="dropdown-item">Skirts</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/men" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Men</NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink to="/men/all" className="dropdown-item">All Products</NavLink></li>
                                <li><NavLink to="/men/shirts" className="dropdown-item">Shirts</NavLink></li>
                                <li><NavLink to="/men/pants" className="dropdown-item">Pants</NavLink></li>
                                <li><NavLink to="/men/hoodies" className="dropdown-item">Hoodies</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item"><NavLink to="/kids" className="nav-link">Kids</NavLink></li>
                        <li className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;
