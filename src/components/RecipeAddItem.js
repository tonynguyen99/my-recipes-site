import React from "react";
import "./RecipeAddItem.css";
import { addRecipe } from "./slices/recipeSlice";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function RecipeAddItem() {
  // React states
  const [recipeTitleInput, editRecipeTitleInput] = React.useState("");
  const [recipeTitleDescription, editRecipeTitleDescription] = React.useState("");

  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  // Handle input changes and store in state
  function handleInputChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    inputName === "recipeTitle"
      ? editRecipeTitleInput(inputValue)
      : editRecipeTitleDescription(inputValue);
  }

  const payload = {
    key: uuidv4(),
    title: "Recipe title 2",
    description: "Recipe description 2",
    date: "date 2",
  };

  console.log(recipes);

  return (
    <div className="recipe-add-item">
      <form>
        <label for="recipe-title">Enter recipe title</label>
        <input
          // Figure out how to keep state of title and description, then pass it to payload. See https://stackoverflow.com/questions/72063622/react-redux-toolkit-state-management-for-input-field
          onChange={handleInputChange}
          id="recipe-title"
          name="recipeTitle"
          placeholder="Recipe title"
          value={recipeTitleInput}
        />
        <label for="recipe-description">Enter recipe description</label>
        <textarea
          onChange={handleInputChange}
          id="recipe-description"
          name="recipeDescription"
          placeholder="Recipe description"
          rows="3"
          value={recipeTitleDescription}
        />
        <button
          onClick={(event) => {
            dispatch(addRecipe(payload));
            event.preventDefault();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RecipeAddItem;
