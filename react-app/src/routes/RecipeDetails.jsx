import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useDispatch } from 'react-redux'
import { fetchRecipeDetails } from '../api/recipeByIngredients'
import { addIngredientsToList } from '../redux/shoppingSlice'
import Spinner from '../components/Spinner'
import ErrorContainer from '../components/ErrorContainer'

export default function RecipeDetails() {
    const { recipeId } = useParams()
    const dispatch = useDispatch()

    const { data: recipe, isLoading, error } = useQuery({
        queryKey: ['recipeDetails', recipeId],
        queryFn: () => fetchRecipeDetails(recipeId),
        enabled: !!recipeId
    })

    function handleAddToShoppingList() {
        if (recipe && recipe.extendedIngredients) {
            const ingredientNames = recipe.extendedIngredients.map(
                ing => ing.name
            )
            dispatch(addIngredientsToList(ingredientNames))
        }
    }

    if (isLoading) return (
        <div className="py-20">
            <Spinner />
        </div>
    )
    if (error) return <ErrorContainer>Error: {error.message}</ErrorContainer>
    if (!recipe) return null

    return (
        <div className="max-w-3xl mx-auto">
            <div className="rounded-xl overflow-hidden mb-6 shadow-md">
                <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-64 sm:h-80 object-cover"
                />
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
                {recipe.title}
            </h1>

            <div className="flex flex-wrap gap-3 mb-6">
                <span className="badge-green flex items-center gap-1 text-sm px-3 py-1">
                    ⏱️ {recipe.readyInMinutes} min
                </span>
                <span className="badge-orange flex items-center gap-1 text-sm px-3 py-1">
                    🍽️ {recipe.servings} servings
                </span>
            </div>

            <div className="card p-5 mb-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold">Ingredients</h2>
                    <button
                        onClick={handleAddToShoppingList}
                        className="btn-primary text-xs"
                    >
                        🛒 Add All to Shopping List
                    </button>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {recipe.extendedIngredients && recipe.extendedIngredients.map((ing, idx) => (
                        <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-text-secondary py-1"
                        >
                            <span className="text-primary-500 mt-0.5">•</span>
                            {ing.original}
                        </li>
                    ))}
                </ul>
            </div>

            {recipe.instructions && (
                <div className="card p-5 mb-6">
                    <h2 className="text-lg font-bold mb-3">Instructions</h2>
                    <div
                        className="prose prose-sm max-w-none text-text-secondary leading-relaxed
                            [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2
                            [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1
                            [&_li]:text-sm [&_p]:text-sm [&_p]:mb-2"
                        dangerouslySetInnerHTML={{ __html: recipe.instructions }}
                    />
                </div>
            )}

            {recipe.summary && (
                <div className="card p-5 mb-6">
                    <h2 className="text-lg font-bold mb-3">Summary</h2>
                    <div
                        className="text-sm text-text-secondary leading-relaxed [&_a]:text-primary-600 [&_a]:underline [&_b]:text-text-primary"
                        dangerouslySetInnerHTML={{ __html: recipe.summary }}
                    />
                </div>
            )}
        </div>
    )
}