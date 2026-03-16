import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    list: []
}

export const shoppingSlice = createSlice({
    name: "savedRecipes",
    initialState,
    reducers: {
        addIngredientsToList(state, action) {
            const newIngredients = action.payload; // List of new ingredients

            const combined = new Set([...state.list, ...newIngredients])
            state.list = Array.from(combined);
        },
        removeIngredientsFromList(state, action) {
            state.list = state.list.filter(item => item !== action.payload);
        },
        clearShoppingList(state) {
            state.list = []
        }
    }
})

export const { addIngredientsToList, removeIngredientFromList, clearShoppingList } = shoppingSlice.actions;
export default shoppingSlice.reducer;