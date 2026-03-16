import { configureStore } from "@reduxjs/toolkit"
import pantryReducer, { pantrySlice } from "./pantrySlice";
import shoppingReducer, { shoppingSlice } from './shoppingSlice';
import savedRecipesReducer, { savedRecipesSlice } from './savedRecipesSlice'

const store = configureStore({
    reducer: {
        pantry: pantryReducer,
        shopping: shoppingReducer,
        savedRecipes: savedRecipesReducer
    }
})

export default store;