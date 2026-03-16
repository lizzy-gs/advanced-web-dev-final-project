import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <ul>
                    <li className="home">
                        <NavLink to="/">FridgeTable</NavLink>
                    </li>
                    <li>
                        <NavLink to="/pantry">Pantry</NavLink>
                    </li>
                    <li>
                        <NavLink to="/search">Find Recipes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shopping">Saved Recipes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shopping">Shopping List</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}