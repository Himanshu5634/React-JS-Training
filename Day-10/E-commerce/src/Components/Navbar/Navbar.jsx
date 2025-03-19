import React from "react";
import "./Navbar.scss";
import { Link } from "react-router";
import { assets } from "../../assets/assets";

const Navbar = ({setShowLogin}) => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <p>E-commerce</p>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search Products here" />
        <div className="magnifying">
          <img src={assets.searchPng} alt="" />
        </div>
      </div>
      <div className="nav-lists">
        <ul>
          <Link to={"/home"}>
            <li>Home</li>
          </Link>
          <Link to={"/products"}>
            <li>Products</li>
          </Link>
          <Link to={"/categories"}>
            <li>Categories</li>
          </Link>
          <Link to={"/contact-us"}>
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
      <div className="authentication">
        {true ? (
          <div className="sign-up-btn">
            <button onClick={() => setShowLogin(true)}>Log In</button>
          </div>
        ) : (
          <div className="user-profile">
            <img src={assets.user} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
