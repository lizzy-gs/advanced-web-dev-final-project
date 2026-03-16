export default function PantryList({ inventory, selectedItems, onToggle, onRemove }) {
    return (
        <div>
            {inventory.length === 0 ? (<p>Your pantry is currently empty.</p>) : (
                inventory.map((item) => {
                    const today = new Date().toISOString().split('T')[0];
                    const isExpired = item.expires < today;
                    const isSelected = selectedItems.includes(item.name);

                    return (
                        <div key={item.name}>
                            <div>
                                <input
                                    type="checkbox"
                                    checked={isSelected}
                                    onChange={() => onToggle(item.name)}
                                />

                                <div>
                                    <p> {item.name} </p>
                                    <p> {isExpired ? `Expired: ${item.expires}` : `Expires: ${item.expires}`} </p>
                                </div>
                            </div>

                            <button onClick={() => onRemove(item)}>
                                X
                            </button>
                        </div>
                    )
                })
            )}
        </div>
    )
}