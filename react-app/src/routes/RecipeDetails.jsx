import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchRecipeDetails } from '../api/recipeByIngredients'
import Spinner from '../components/Spinner'
import ErrorContainer from '../components/ErrorContainer'

export default function RecipeDetails() {
    const { recipeId } = useParams()

    const { data: recipe, isLoading, error } = useQuery({
        queryKey: ['recipeDetails', recipeId],
        queryFn: () => fetchRecipeDetails(recipeId),
        enabled: !!recipeId
    })



    if (isLoading) return <Spinner />
    if (error) return <ErrorContainer>Error: {error.message}</ErrorContainer>
    if (!recipe) return null

    return (
        <div>
            <h2>{recipe.title}</h2>

            <img
                src={recipe.image}
                alt={recipe.title}
            />

            <div>
                <p>Ready in {recipe.readyInMinutes} minutes</p>
                <p>Servings: {recipe.servings}</p>
            </div>

            <div>
                <h3>Ingredients</h3>
                <ul>
                    {recipe.extendedIngredients && recipe.extendedIngredients.map((ing, idx) => (
                        <li key={idx}>{ing.original}</li>
                    ))}
                </ul>


            </div>

            {recipe.instructions && (
                <div>
                    <h3>Instructions</h3>
                    <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
                </div>
            )}

            {recipe.summary && (
                <div>
                    <h3>Summary</h3>
                    <div dangerouslySetInnerHTML={{ __html: recipe.summary }} />
                </div>
            )}
        </div>
    )
}