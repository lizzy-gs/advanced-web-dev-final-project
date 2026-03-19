import { useRouteError } from "react-router"
import Root from './Root'

export default function ErrorPage() {
    const error = useRouteError()
    return (
        <Root>
            <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                <span className="text-6xl mb-4">😵</span>
                <h1 className="text-3xl font-extrabold mb-2">Oops!</h1>
                <p className="text-text-secondary text-lg">
                    {error.statusText || error.message}
                </p>
            </div>
        </Root>
    )
}