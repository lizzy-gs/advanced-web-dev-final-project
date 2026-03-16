import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addIngredientToPantry, removeIngredientFromPantry, toggleIngredient } from '../redux/pantrySlice';
import PantryList from '../components/PantryList';
import PantryForm from '../components/PantryForm';

export default function Pantry() {
    const dispatch = useDispatch()

    const inventory = useSelector((state) => state.pantry.inventory);
    const selectedItems = useSelector((state) => state.pantry.selectedItems);
    const sortedInventory = [...inventory].sort((a, b) => new Date(a.expires) - new Date(b.expires));

    return (
        <>
            My Pantry

            <PantryForm
                onAdd={(newItem) => dispatch(addIngredientToPantry(newItem))}
            />

            <PantryList
                inventory={sortedInventory}
                selectedItems={selectedItems}
                onToggle={(name) => dispatch(toggleIngredient(name))}
                onRemove={(item) => dispatch(removeIngredientFromPantry(item))}
            />
        </>
    )
}