import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <h2>The Home Bartender</h2>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Welcome</Link>
          </li>
          <li>
            <Link to="/drinkname">Drink Name</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
