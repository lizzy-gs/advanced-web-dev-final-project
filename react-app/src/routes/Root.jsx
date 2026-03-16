import { NavLink, Outlet } from "react-router"
import Navbar from "./Navbar"
import Home from "./Home"


export default function Root(props) {
    return (
        <div>
            <Navbar />
            <main className="content">
                {props.children || <Outlet />}
            </main>
        </div>
    )
}