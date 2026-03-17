const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY

export const fetchRecipes = async (ingredients, searchParams) => {
    // Encoding for multiworded ingredients
    const ingredientString = encodeURIComponent(ingredients.join(','));

    const url =
        `https://api.spoonacular.com/recipes/findByIngredients?` +
        `ingredients=${ingredientString}` +
        `&number=${searchParams.number}` +
        `&ranking=${searchParams.ranking}` +
        `&ignorePantry=${searchParams.ignorePantry}` +
        `&apiKey=${API_KEY}`;

    console.log(url)

    const res = await fetch(url);
    if (!res.ok) throw new Error('Could not fetch recipes');
    return res.json()
}