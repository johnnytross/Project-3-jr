import React from "react";

function Jumbotron({ children }) {
  return (
    <container>
      <div
        style={{ height: 375, clear: "both", backgroundColor: "black", opacity: .65, paddingTop: 70, textAlign: "center", color: "white", }}
        className="jumbotron"
      >
        {children}
      </div>
    </container>
  );
}

export default Jumbotron;
