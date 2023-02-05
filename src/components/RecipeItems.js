import React from "react";
import "./RecipeItems.css";
import Recipe from "./Recipe";
import { v4 as uuidv4 } from "uuid";

function RecipeItems() {
  const recipesHardcoded = [
    {
      key: uuidv4(),
      title: "Recipe title",
      description: "Recipe description",
      date: "date",
    },
    {
      key: uuidv4(),
      title: "Recipe title 2",
      description: "Recipe description 2",
      date: "date 2",
    },
  ];

  return <div className="recipe-items">hello</div>;
}

export default RecipeItems;
