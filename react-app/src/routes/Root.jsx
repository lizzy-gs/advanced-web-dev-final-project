import { Outlet } from "react-router"
import Navbar from "../components/Navbar.jsx"

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