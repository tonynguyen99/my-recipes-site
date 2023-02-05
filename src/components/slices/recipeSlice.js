import { createSlice } from "@reduxjs/toolkit";

export const recipeSlice = createSlice({
  name: "recipe",
  initialState: ["abc"],
  reducers: {
    addRecipe: (state, action) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addRecipe } = recipeSlice.actions;

export default recipeSlice.reducer;
