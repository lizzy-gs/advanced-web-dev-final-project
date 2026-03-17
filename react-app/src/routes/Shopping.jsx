import { useSelector, useDispatch } from 'react-redux'
import { removeIngredientFromList, clearShoppingList } from '../redux/shoppingSlice'

export default function Shopping() {
    const shoppingList = useSelector((state) => state.shopping.list)
    const dispatch = useDispatch()

    return (
        <>
            <h2>Shopping List</h2>

            {shoppingList.length === 0 ? (
                <p>Your shopping list is empty. Add ingredients from a recipe!</p>
            ) : (
                <>
                    <button onClick={() => dispatch(clearShoppingList())}>
                        Clear List
                    </button>

                    <ul>
                        {shoppingList.map((item, idx) => (
                            <li key={idx}>
                                <span>{item}</span>
                                <button onClick={() => dispatch(removeIngredientFromList(item))}>
                                    X
                                </button>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    )
}