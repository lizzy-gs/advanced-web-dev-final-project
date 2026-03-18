import { NavLink } from "react-router";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
            <div className="mb-6">
                <span className="text-6xl">🥗</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight mb-3">
                Welcome to{" "}
                <span className="text-primary-600">FridgeTable</span>
            </h1>

            <p className="text-text-secondary text-lg max-w-xl mb-8 leading-relaxed">
                Track what's in your pantry, discover recipes based on your ingredients,
                and build your shopping list — all in one place.
            </p>

            <div className="flex gap-4">
                <NavLink
                    to="/pantry"
                    className="btn-primary text-base px-6 py-3 inline-flex items-center gap-2"
                >
                    📦 Open Pantry
                </NavLink>
                <NavLink
                    to="/search"
                    className="btn-secondary text-base px-6 py-3 inline-flex items-center gap-2"
                >
                    🔍 Find Recipes
                </NavLink>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl w-full">
                <div className="card p-6 text-center">
                    <div className="text-3xl mb-3">📋</div>
                    <h3 className="font-semibold mb-1">Manage Pantry</h3>
                    <p className="text-sm text-text-muted">Track ingredients and expiration dates</p>
                </div>
                <div className="card p-6 text-center">
                    <div className="text-3xl mb-3">🍳</div>
                    <h3 className="font-semibold mb-1">Discover Recipes</h3>
                    <p className="text-sm text-text-muted">Find recipes using what you already have</p>
                </div>
                <div className="card p-6 text-center">
                    <div className="text-3xl mb-3">🛒</div>
                    <h3 className="font-semibold mb-1">Shopping List</h3>
                    <p className="text-sm text-text-muted">Build a list of ingredients you need</p>
                </div>
            </div>
        </div>
    )
}