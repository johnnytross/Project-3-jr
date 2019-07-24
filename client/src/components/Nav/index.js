import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/" style={{color: "white"}}>
        Veganize
      </a>
      <a className="navbar-brand" href="/saved" style={{color: "white"}}>
        Saved Recipes
      </a>
    </nav>
  );
}

export default Nav;
