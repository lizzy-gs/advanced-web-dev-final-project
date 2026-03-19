import { NavLink } from "react-router";

export default function Navbar() {
    const linkClass = ({ isActive }) =>
        `relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200
        ${isActive
            ? "text-primary-700 bg-primary-50"
            : "text-text-secondary hover:text-primary-600 hover:bg-surface-hover"
        }`;

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
                <NavLink
                    to="/"
                    className="text-xl font-extrabold tracking-tight text-primary-700 hover:text-primary-600 transition-colors"
                >
                    🍽️ FridgeTable
                </NavLink>

                <ul className="flex items-center gap-1">
                    <li>
                        <NavLink to="/pantry" className={linkClass}>
                            Pantry
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/search" className={linkClass}>
                            Find Recipes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/recipes" className={linkClass}>
                            Saved Recipes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shopping" className={linkClass}>
                            Shopping List
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}