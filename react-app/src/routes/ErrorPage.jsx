import { useRouteError } from "react-router"
import Root from './Root'

export default function ErrorPage() {
    const error = useRouteError()
    return (
        <Root>
            <h1> Error ! </h1>
            <p>
                {error.statusText || error.message}
            </p>
        </Root>
    )
}