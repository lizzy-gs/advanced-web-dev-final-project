import { useSelector, useDispatch } from 'react-redux';
import { addIngredientToPantry, removeIngredientFromPantry, toggleIngredient } from '../redux/pantrySlice';
import PantryList from '../components/PantryList';
import PantryForm from '../components/PantryForm';

export default function Pantry() {
    const dispatch = useDispatch()

    const inventory = useSelector((state) => state.pantry.inventory);
    const selectedItems = useSelector((state) => state.pantry.selectedItems);
    const sortedInventory = [...inventory].sort((a, b) => new Date(a.expires) - new Date(b.expires));

    return (
        <div>
            <h1 className="page-title">📦 My Pantry</h1>

            <div className="card p-5 mb-6">
                <h2 className="text-base font-semibold text-text-secondary mb-3">Add Ingredient</h2>
                <PantryForm
                    onAdd={(newItem) => dispatch(addIngredientToPantry(newItem))}
                />
            </div>

            <div className="card p-5">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-base font-semibold text-text-secondary">
                        Ingredients ({inventory.length})
                    </h2>
                    {selectedItems.length > 0 && (
                        <span className="badge-green">
                            {selectedItems.length} selected
                        </span>
                    )}
                </div>

                <PantryList
                    inventory={sortedInventory}
                    selectedItems={selectedItems}
                    onToggle={(name) => dispatch(toggleIngredient(name))}
                    onRemove={(item) => dispatch(removeIngredientFromPantry(item))}
                />
            </div>
        </div>
    )
}