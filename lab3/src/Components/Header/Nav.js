import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css"
const Nav = () => {
  return (
<div>
<nav class="navbar navbar-expand-lg">
  <h2 class="navbar-brand">
  <NavLink
              style={{textDecoration:"none",zIndex:"1",color:"white"}}
              to={`/artists`}
              exact
            >Artists</NavLink>
            </h2>
</nav>
</div>
  );
};

export default Nav;
