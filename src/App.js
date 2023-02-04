import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import RecipeItems from "./RecipeItems";
import RecipeAddItem from "./RecipeAddItem";
import React from "react";

function App() {
  const [recipes, editRecipes] = React.useState([]);

  return (
    <div>
      <Navbar />
      <Header />
      <RecipeAddItem />
      <RecipeItems />
    </div>
  );
}

export default App;
