import React from "react";
import { Link } from "react-router-dom";
import { Button, NavLink } from "reactstrap";
import CartSummary from "../cart/CartSummary";

export default class Navi extends React.Component {
  render() {
    return (
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-5 h4" >
          <div className="container">
            <Link to="/" className="navbar-brand" style={{fontSize:"30px"}}>
              My Project
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink href="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink href="/about">About</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Orders
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item">
                        <Link className="text-decoration-none text-dark" to="/categoriesAndProducts">All orders
                        </Link>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item">
                        <Link
                          className="text-decoration-none text-dark"
                          to="/categories"
                        >
                          Categories
                        </Link>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item">
                        <Link
                          className="text-decoration-none text-dark"
                          to="/products"
                        >
                          Products
                        </Link>
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink className="dropdown-item">
                        <Link
                          className="text-decoration-none text-dark"
                          to="/saveproduct"
                        >
                          Add product
                        </Link>
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink href="/contact">Contact</NavLink>
                </li>

                <CartSummary />
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form><div >
            <Link to="/login">
              <Button color="primary">Login</Button>
            </Link>
            <Link to="/createaccount">
              <Button color="danger">Sign up</Button>
            </Link>
          </div>
            </div>
          </div>
          
        </nav>
      </div>
    );
  }
}
