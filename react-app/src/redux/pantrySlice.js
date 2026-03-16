import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    inventory: [], // entire ingredients
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

            const stillHasThisIngredient = state.inventory.some(i => i.name === itemToRemove.name);

            // Only remove from selectedItems if all ingredients of the name have been removed
            if (!stillHasThisIngredient) {
                state.selectedItems = state.selectedItems.filter(name => name !== itemToRemove.name);
            }
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