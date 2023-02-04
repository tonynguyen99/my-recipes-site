import React from "react";
import "./Recipe.css";

function Recipe(props) {
  return (
    <div className="recipe">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.date}</p>
    </div>
  );
}

export default Recipe;
