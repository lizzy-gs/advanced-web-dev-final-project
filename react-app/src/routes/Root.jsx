import { Outlet } from "react-router"
import Navbar from "../components/Navbar.jsx"

export default function Root(props) {
    return (
        <div className="min-h-screen bg-surface-alt font-sans">
            <Navbar />
            <main className="page-container">
                {props.children || <Outlet />}
            </main>
        </div>
    )
}