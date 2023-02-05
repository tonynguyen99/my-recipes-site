import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import recipeReducer from "../components/slices/recipeSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    recipes: recipeReducer,
  },
});
