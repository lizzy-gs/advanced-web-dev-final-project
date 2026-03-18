export default function PantryList({ inventory, selectedItems, onToggle, onRemove }) {
    if (inventory.length === 0) {
        return (
            <div className="empty-state">
                <span className="text-4xl block mb-2">🫙</span>
                <p className="font-medium">Your pantry is empty</p>
                <p className="text-sm">Add some ingredients above to get started!</p>
            </div>
        )
    }

    return (
        <div className="divide-y divide-border">
            {inventory.map((item) => {
                const today = new Date().toISOString().split('T')[0];
                const isExpired = item.expires < today;
                const isSelected = selectedItems.includes(item.name);

                return (
                    <div
                        key={item.id}
                        className={`flex items-center justify-between py-3 px-2 rounded-lg transition-colors
                            ${isSelected ? "bg-primary-50/50" : "hover:bg-surface-hover"}`}
                    >
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => onToggle(item.name)}
                                className="w-4 h-4 rounded border-border-strong text-primary-600 focus:ring-primary-500 cursor-pointer accent-primary-600"
                            />

                            <div>
                                <p className={`font-medium text-sm ${isExpired ? "text-text-muted line-through" : ""}`}>
                                    {item.name}
                                </p>
                                <span className={isExpired ? "badge-red" : "badge-green"}>
                                    {isExpired ? `Expired: ${item.expires}` : `Expires: ${item.expires}`}
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={() => onRemove(item)}
                            className="text-text-muted hover:text-danger transition-colors p-1 rounded hover:bg-danger-light"
                            title="Remove item"
                        >
                            ✕
                        </button>
                    </div>
                )
            })}
        </div>
    )
}