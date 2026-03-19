export default function ErrorContainer({ children }) {
    return (
        <div className="bg-danger-light border border-danger/20 text-danger rounded-lg px-4 py-3 text-sm font-medium flex items-center gap-2">
            <span>⚠️</span>
            {children}
        </div>
    )
}
