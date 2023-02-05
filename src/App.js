import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import RecipeItems from "./components/RecipeItems";
import RecipeAddItem from "./components/RecipeAddItem";
import React from "react";

function App() {
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
