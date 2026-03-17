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
        <form onSubmit={handleSearch}>
            <h2> Search Filters </h2>
            <div>
                <h3> Currently selected ingredients: </h3>
                {selectedIngredients.length === 0 ? <p> No Ingredients Selected </p> : selectedIngredients.map((i) => (
                    <div key={i}>
                        <span>{i}</span>
                        <button
                            onClick={() => dispatch(toggleIngredient(i))}
                            title="Remove Ingredient"
                        >
                            X
                        </button>
                    </div>
                ))}
            </div>
            <div>
                <label> Max Recipes: {number} </label>
                <input
                    type="range" min="1" max="100" value={number}
                    onChange={(e) => setNumber(Number(e.target.value))}
                />
            </div>

            <div>
                <label> Search Priority </label>
                <select
                    value={ranking}
                    onChange={(e) => setRanking(Number(e.target.value))}
                >
                    <option value={1}>Maximize Selected Ingredients</option>
                    <option value={2}>Minimize Missing Ingredients</option>
                </select>
            </div>

            <div>
                <input
                    type="checkbox"
                    checked={ignorePantry}
                    onChange={(e) => setIgnorePantry(e.target.checked)}
                />
                <label> Ignore typical pantry items (Water, Salt, Flour, etc.) </label>
            </div>

            <button type="submit">
                Search
            </button>
        </form>
    )
}