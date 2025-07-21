import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle,FaUserPlus,FaSignInAlt,FaSignOutAlt  } from 'react-icons/fa'
// import {BiLogOut} from 'react-icons/bi'
import { fetchAllCategories } from "../../Features/Category/CategorySlice";
import './TopNavbar.css'

function TopNavbar() {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <div className="bg-dark" id="navi">
        <div className="brand mx-auto">

          {/* Brand */}
          <Link to="/" className="navbar-brand fs-3">
            My Store
          </Link>
        </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
        <div className="container-fluid navMenu">

          {/* user */}
          <div className="user">
            <FaUserCircle className="userIcon me-2" />User
            {/* <Link to='#' className="logs">Login </Link>/
            <Link to='#' className="logs"> Register</Link> */}
          </div>

          {/* logs */}
          <div className="logs">
              <Link className="logItem" title="Login"><FaSignInAlt/> </Link>/  
              <Link className="logItem" title="Register"> <FaUserPlus/></Link>
              {/* <Link className="logItem" title="Logout"><FaSignOutAlt/></Link> */}
          </div>

          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Items */}
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>

              {/* Categories Dropdown */}
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  id="categoryDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </span>
                <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                  {categories &&
                    categories.map((c, index) => (
                      <li key={index}>
                        <Link to={`/category/${c}`} className="dropdown-item text-capitalize">
                          {c}
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>

              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default TopNavbar;
