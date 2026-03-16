import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    inventory: [],
    selectedItems: []
}

export const pantrySlice = createSlice({
    name: "pantry",
    initialState,
    reducers: {
        addIngredientToPantry(state, action) {
            const newItem = action.payload;
            if (!state.inventory.includes(newItem)) {
                state.inventory.push(newItem)
            }
        },
        removeIngredientFromPantry(state, action) {
            const itemToRemove = action.payload;
            state.inventory = state.inventory.filter(item => item !== itemToRemove)
            state.selectedItems = state.selectedItems.filter(item => item !== itemToRemove)
        },
        toggleIngredient(state, action) {
            const ingredient = action.payload; // ingredient name

            if (state.selectedItems.includes(ingredient)) {
                state.selectedItems = state.selectedItems.filter(item => item !== ingredient);
            } else {
                state.selectedItems.push(ingredient)
            }
        },
        clearPantrySelection(state) {
            state.selectedItems = []
        }
    }
})

export const { addIngredientToPantry, removeIngredientFromPantry, toggleIngredient, clearPantrySelection } = pantrySlice.actions;
export default pantrySlice.reducer;