import { useSelector } from 'react-redux'

export default function Recipes() {
    const savedRecipes = useSelector((state) => state.savedRecipes.recipes)

    return (
        <div>
            <h1 className="page-title">❤️ Saved Recipes</h1>

            {savedRecipes.length === 0 ? (
                <div className="empty-state mt-8">
                    <span className="text-5xl block mb-3">📚</span>
                    <p className="font-medium text-lg text-text-secondary">No saved recipes yet</p>
                    <p className="text-sm mt-1">
                        Save recipes from the search results to see them here!
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {savedRecipes.map((recipe) => (
                        <div key={recipe.id} className="card overflow-hidden">
                            {recipe.image && (
                                <img
                                    src={recipe.image}
                                    alt={recipe.title}
                                    className="w-full h-40 object-cover"
                                />
                            )}
                            <div className="p-4">
                                <h3 className="font-semibold text-sm mb-2">{recipe.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}