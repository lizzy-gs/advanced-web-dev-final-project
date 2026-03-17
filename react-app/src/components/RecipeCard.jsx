import { NavLink } from "react-router";

export default function RecipeCard({ recipe }) {
    const { id, title, image, usedIngredientCount, missedIngredientCount } = recipe;

    return (
        <div>
            <img
                src={image}
                alt={title}
            />

            <div>
                <h3>{title}</h3>

                <div>
                    <span>
                        Using {usedIngredientCount} Items!
                    </span>
                    <span>
                        Missing {missedIngredientCount} items.
                    </span>
                </div>

                <NavLink to={`/recipes/${id}`}>
                    View Recipe Details
                </NavLink>
            </div>

        </div>
    )
}