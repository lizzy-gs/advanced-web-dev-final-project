import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleIngredient } from "../redux/pantrySlice";

export default function RecipeFilters({ onSearch, selectedIngredients }) {
    const [number, setNumber] = useState(10);
    const [ranking, setRanking] = useState(1);
    const [ignorePantry, setIgnorePantry] = useState(true);
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault()

        if (selectedIngredients.length === 0) {
            alert("Select an ingredient!")
        }

        onSearch({ number, ranking, ignorePantry })
    }

    return (
        <form onSubmit={handleSearch} className="space-y-5">
            <div>
                <h3 className="text-sm font-semibold text-text-secondary mb-2">
                    Selected Ingredients
                </h3>
                {selectedIngredients.length === 0 ? (
                    <p className="text-sm text-text-muted italic">
                        No ingredients selected — go to Pantry to select some!
                    </p>
                ) : (
                    <div className="flex flex-wrap gap-2">
                        {selectedIngredients.map((i) => (
                            <span key={i} className="chip">
                                {i}
                                <button
                                    type="button"
                                    onClick={() => dispatch(toggleIngredient(i))}
                                    className="text-primary-400 hover:text-primary-700 transition-colors font-bold"
                                    title="Remove Ingredient"
                                >
                                    ✕
                                </button>
                            </span>
                        ))}
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                    <label className="block text-xs font-medium text-text-muted mb-1">
                        Max Recipes: <span className="text-text-primary font-semibold">{number}</span>
                    </label>
                    <input
                        type="range" min="1" max="100" value={number}
                        onChange={(e) => setNumber(Number(e.target.value))}
                        className="w-full accent-primary-600"
                    />
                </div>

                <div>
                    <label className="block text-xs font-medium text-text-muted mb-1">Search Priority</label>
                    <select
                        value={ranking}
                        onChange={(e) => setRanking(Number(e.target.value))}
                        className="input-field w-full"
                    >
                        <option value={1}>Maximize Selected Ingredients</option>
                        <option value={2}>Minimize Missing Ingredients</option>
                    </select>
                </div>

                <div className="flex items-end pb-1">
                    <label className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer">
                        <input
                            type="checkbox"
                            checked={ignorePantry}
                            onChange={(e) => setIgnorePantry(e.target.checked)}
                            className="w-4 h-4 rounded accent-primary-600"
                        />
                        Ignore pantry staples
                    </label>
                </div>
            </div>

            <button type="submit" className="btn-primary">
                🔍 Search Recipes
            </button>
        </form>
    )
}