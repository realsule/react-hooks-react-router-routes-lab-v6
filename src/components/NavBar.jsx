import React from "react";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <nav className="navbar"  role="navigation">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </nav>
    );
};

export default NavBar;
