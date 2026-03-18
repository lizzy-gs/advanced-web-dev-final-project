import { NavLink } from "react-router";

export default function RecipeCard({ recipe }) {
    const { id, title, image, usedIngredientCount, missedIngredientCount } = recipe;

    return (
        <div className="card overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
            <div className="aspect-video overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="p-4">
                <h3 className="font-semibold text-sm leading-snug mb-3 line-clamp-2">
                    {title}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                    <span className="badge-green">
                        ✓ {usedIngredientCount} used
                    </span>
                    <span className="badge-orange">
                        + {missedIngredientCount} missing
                    </span>
                </div>

                <NavLink
                    to={`/search/${id}`}
                    className="btn-primary w-full text-center block text-xs py-2"
                >
                    View Details →
                </NavLink>
            </div>
        </div>
    )
}