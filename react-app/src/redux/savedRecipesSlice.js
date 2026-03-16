import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    recipes: []
}

export const savedRecipesSlice = createSlice({
    name: "savedRecipes",
    initialState,
    reducers: {
        toggleSaveRecipe(state, action) {
            const recipe = action.payload; // recipe details with an id

            const exists = state.recipes.find(r => r.id === recipe.id)

            if (exists) {
                state.recipes = state.recipes.filter(r => r.id !== recipe.id);
            } else {
                state.recipes.push(recipe);
            }
        }
    }
})

export const { toggleSaveRecipe } = savedRecipesSlice.actions;
export default savedRecipes.reducer;