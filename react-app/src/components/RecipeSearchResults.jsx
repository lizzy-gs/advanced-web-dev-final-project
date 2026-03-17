import RecipeCard from "./RecipeCard";

export default function RecipeSearchResults({ recipes }) {
    if (!recipes || recipes.length === 0) {
        return (
            <p> No recipes found. Try selecting more ingredients! </p>
        )
    }

    return (
        <div>
            {recipes.map((recipe) =>
                <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                />
            )}
        </div>
    )
}