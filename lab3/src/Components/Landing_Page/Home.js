import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
const Home = () => {
  return (
<header>
  <div class="text-box">
    <h1>
      <span class="text-primary">awesome music</span>
      <span class="text-sub">from the best artists</span>
    </h1>
	<button>	
		<NavLink
		style={{color: "white",textDecoration:"none" }}
        to="/artists"
        exact>
			Get Started
	</NavLink>
	</button>

  </div>
</header>
  );
};

export default Home;
