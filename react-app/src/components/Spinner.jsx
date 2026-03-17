export default function Spinner() {
    return (
        <div className="flex space-x-2 justify-center items-center">
            <div className="h-3 w-3 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="h-3 w-3 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="h-3 w-3 bg-gray-500 rounded-full animate-bounce"></div>
        </div>
    )
}
