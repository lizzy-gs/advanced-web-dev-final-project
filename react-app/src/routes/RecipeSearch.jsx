import { useState } from "react";
import { useSelector } from "react-redux";
import RecipeFilters from "../components/RecipeFilters";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/Spinner";
import ErrorContainer from "../components/ErrorContainer"
import { fetchRecipes } from "../api/recipeByIngredients";
import RecipeSearchResults from "../components/RecipeSearchResults";


export default function RecipeSearch() {
    const selectedIngredients = useSelector((state) => state.pantry.selectedItems)

    const [searchParams, setSearchParams] = useState({
        number: 10,
        ranking: 1,
        ignorePantry: true
    })

    const { data, isLoading, error } = useQuery({
        queryKey: ['recipes', selectedIngredients, searchParams],
        queryFn: () => fetchRecipes(selectedIngredients, searchParams),
        enabled: selectedIngredients.length > 0,
    })

    console.log("data== ", data)

    return (
        <>
            Search for a Recipe

            <RecipeFilters
                onSearch={(newParams) => setSearchParams(newParams)}
                selectedIngredients={selectedIngredients} />

            {error && <ErrorContainer>Error: {error.message}</ErrorContainer>}
            {isLoading && <Spinner />}

            <RecipeSearchResults
                recipes={data} />
        </>
    )
}