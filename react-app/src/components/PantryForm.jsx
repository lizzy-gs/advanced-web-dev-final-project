import { useState } from "react";

export default function PantryForm({ onAdd }) {
    const [name, setName] = useState("")
    const [exp, setExp] = useState("")

    const handleAdd = (e) => {
        e.preventDefault();
        if (name.trim() && exp) {
            onAdd({
                id: crypto.randomUUID(),
                name: name.trim(),
                expires: exp
            })
        }

        setName('')
        setExp('')
    }

    return (
        <form onSubmit={handleAdd}>
            <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Add ingredient name...'
            />
            <input
                type='date'
                value={exp}
                onChange={(e) => setExp(e.target.value)}
            />
            <button type='submit'>
                Add
            </button>
        </form>
    )
}