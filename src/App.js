import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import RecipeItems from "./components/RecipeItems";
import RecipeAddItem from "./components/RecipeAddItem";
import React from "react";
import Counter from "./features/counter/Counter";

function App() {
  const [recipes, editRecipes] = React.useState([]);

  return (
    <div>
      <Navbar />
      <Header />
      <RecipeAddItem />
      <RecipeItems />
      <Counter />
    </div>
  );
}

export default App;
