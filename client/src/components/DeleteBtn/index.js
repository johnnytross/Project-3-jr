import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <span className="delete-btn" role="button" onClick={props.savedRecipe} tabIndex="0">
      {props.isSaved ? "★" : "☆"}
      
      
      {/* ★ ☆ */}
    </span>
  );
}

export default DeleteBtn;
