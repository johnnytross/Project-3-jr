import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", backgroundColor: "lightgreen", paddingTop: 120, textAlign: "center", color: "white" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
