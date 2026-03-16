import { configureStore } from "@reduxjs/toolkit"


const store = configureStore({
    reducer: {
        pantry: pantryReducer,
        shopping: shoppingReducer,
        savedRecipes: savedRecipesReducer
    }
})

export default store;