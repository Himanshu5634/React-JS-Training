import React, { useContext, useEffect } from "react";

import { StoreContaxt } from "../../Context/StoreContaxt";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { setSearch, setDark, dark,a } = useContext(StoreContaxt);
console.log(a);

  const handelTheam = (e) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      setDark(false);
    } else {
      setDark(true);
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
      <div className="theam">
        <div class="toggle-switch">
          <label class="switch-label">
            <input type="checkbox" class="checkbox" onClick={handelTheam}/>
            <span class="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
