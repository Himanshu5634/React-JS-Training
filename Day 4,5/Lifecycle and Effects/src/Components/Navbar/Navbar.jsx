import React, { useContext, useEffect } from "react";

import { StoreContaxt } from "../../Context/StoreContaxt";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { setSearch, theam, setTheam, a } = useContext(StoreContaxt);
  console.log(a);

  /**
   * @returns {Promise<void>} set them base on checkbox checked or not
   * @param {*} e
   */
  const handelTheam = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setTheam("dark");
    } else {
      setTheam("light");
    }
  };

  return (
    <div className="navbar">
      <div className="logo">
        <p>
          <Link to={"/"}>MY BLOGS</Link>
        </p>
      </div>
      <div className="search-input">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search post title here..."
        />
      </div>
      <div className="nav-list">
        <p>
          <Link to="/home">home</Link>
        </p>
        <p>
          <Link to="/About">About</Link>
        </p>
        <p>
          <Link to="/Contact-Us">Contact-Us</Link>
        </p>
      </div>
      <div>
        <input
          type="checkbox"
          class="theme-checkbox"
          checked={theam == "dark" ? true : false}
          onClick={handelTheam}
          />
      </div>
          <span>theam:{theam}</span>
    </div>
  );
};

export default Navbar;
