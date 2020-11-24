import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user, token } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <>
      <ul className="navbar-nav mr-auto flex-nowrap">
        <span className="navbar-text">
          {user ? (
            `Welcome, ${user.name.split(" ")[0]}!`
          ) : (
            <div>
              <i className="fas fa-spinner fa-pulse" />
            </div>
          )}
        </span>
      </ul>
      <ul className="navbar-nav ml-auto flex-nowrap">
        <li className="nav-item" onClick={onLogout}>
          <Link className="nav-link" to="/">
            Logout
          </Link>
        </li>
      </ul>
    </>
  );

  const guestLinks = (
    <ul className="navbar-nav ml-auto flex-nowrap">
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {title.split(" ")[0]} <i className={`${icon} text-success`} />{" "}
          {title.split(" ")[1]}
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-grow-1 text-right"
          id="navbar"
        >
          {isAuthenticated && token ? authLinks : guestLinks}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: "IoT Electrocontrol",
  icon: "far fa-lightbulb"
};

export default Navbar;
