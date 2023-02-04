import React from "react";
import "./RecipeAddItem.css";

function RecipeAddItem() {
  // React states
  const [recipeTitleInput, editRecipeTitleInput] = React.useState("");
  const [recipeTitleDescription, editRecipeTitleDescription] = React.useState("");

  // Handle input changes and store in state
  function handleInputChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    inputName === "recipeTitle"
      ? editRecipeTitleInput(inputValue)
      : editRecipeTitleDescription(inputValue);
  }

  return (
    <div className="recipe-add-item">
      <form>
        <label for="recipe-title">Enter recipe title</label>
        <input
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
        <button>Submit</button>
      </form>
    </div>
  );
}

export default RecipeAddItem;
