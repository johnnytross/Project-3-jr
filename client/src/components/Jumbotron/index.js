import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <container>
      <div
        className="jumbotron"
      >
        {children}
      </div>
    </container>
  );
}

export default Jumbotron;
