import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1 className="logohead">intract.</h1>
      </div>
      <div>
        <ul className="navlink">
          <li>
            <a href="">Compass</a>
          </li>
          <li>
            <a href="">Explore</a>
          </li>
          <li>
            <a href="">Academy</a>
          </li>
          <li>
            <a href="">NFTs</a>
          </li>
          <li>
            <a href="">For Projects</a>
          </li>
        </ul>
      </div>
      <div className="search">
        <input
          type="text"
          className="searchbox"
          placeholder="Search for ecosystems,trendeing quests etc..."
        />
      </div>
      <button className="signbtn"> Sign In</button>
    </div>
  );
};

export default Navbar;
