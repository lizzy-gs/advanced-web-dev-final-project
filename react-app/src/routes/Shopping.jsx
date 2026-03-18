import { useSelector, useDispatch } from 'react-redux'
import { removeIngredientFromList, clearShoppingList } from '../redux/shoppingSlice'

export default function Shopping() {
    const shoppingList = useSelector((state) => state.shopping.list)
    const dispatch = useDispatch()

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h1 className="page-title mb-0">🛒 Shopping List</h1>
                {shoppingList.length > 0 && (
                    <button
                        onClick={() => dispatch(clearShoppingList())}
                        className="btn-danger"
                    >
                        Clear All
                    </button>
                )}
            </div>

            {shoppingList.length === 0 ? (
                <div className="empty-state mt-8">
                    <span className="text-5xl block mb-3">🛍️</span>
                    <p className="font-medium text-lg text-text-secondary">Your shopping list is empty</p>
                    <p className="text-sm mt-1">
                        Add ingredients from a recipe to start building your list!
                    </p>
                </div>
            ) : (
                <div className="card divide-y divide-border">
                    {shoppingList.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between px-5 py-3 hover:bg-surface-hover transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-primary-400 shrink-0"></span>
                                <span className="text-sm font-medium">{item}</span>
                            </div>
                            <button
                                onClick={() => dispatch(removeIngredientFromList(item))}
                                className="text-text-muted hover:text-danger transition-colors p-1 rounded hover:bg-danger-light"
                                title="Remove item"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}