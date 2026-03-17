import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    inventory: [
        { id: 1, name: "Chicken Breast", expires: "2026-03-25" }, // test ingredients
        { id: 2, name: "Spinach", expires: "2026-03-20" },
        { id: 3, name: "Milk", expires: "2026-03-18" },
        { id: 4, name: "Milk", expires: "2026-03-30" },
        { id: 5, name: "Greek Yogurt", expires: "2026-01-10" }
    ], // entire ingredients
    selectedItems: [] // ingredient names
}

export const pantrySlice = createSlice({
    name: "pantry",
    initialState,
    reducers: {
        addIngredientToPantry(state, action) {
            const newItem = action.payload;
            const exists = state.inventory.find(item => item === newItem)
            if (!exists) {
                state.inventory.push(newItem)
            }
        },
        removeIngredientFromPantry(state, action) {
            const itemToRemove = action.payload;
            state.inventory = state.inventory.filter(item => item.name !== itemToRemove.name || item.expires !== itemToRemove.expires)
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