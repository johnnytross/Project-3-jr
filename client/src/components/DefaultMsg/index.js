import React from "react";
import "./style.css";

function DefaultMsg(props) {
    return (
        <div className="default-div">
            <span className="default-msg">
                <h5>No recipes found. Try searching for one.</h5>
            </span>
        </div>
        
    );
  }

  export default DefaultMsg;