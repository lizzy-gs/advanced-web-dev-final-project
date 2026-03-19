import RecipeCard from "./RecipeCard";

export default function RecipeSearchResults({ recipes }) {
    if (!recipes || recipes.length === 0) {
        return (
            <div className="empty-state mt-4">
                <span className="text-4xl block mb-2">🍽️</span>
                <p className="font-medium">No recipes found</p>
                <p className="text-sm">Try selecting more ingredients from your Pantry!</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
            {recipes.map((recipe) =>
                <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                />
            )}
        </div>
    )
}