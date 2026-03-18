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
        <form onSubmit={handleAdd} className="flex flex-wrap items-end gap-3">
            <div className="flex-1 min-w-[180px]">
                <label className="block text-xs font-medium text-text-muted mb-1">Ingredient Name</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='e.g. Chicken Breast'
                    className="input-field w-full"
                />
            </div>
            <div className="min-w-[160px]">
                <label className="block text-xs font-medium text-text-muted mb-1">Expiration Date</label>
                <input
                    type='date'
                    value={exp}
                    onChange={(e) => setExp(e.target.value)}
                    className="input-field w-full"
                />
            </div>
            <button type='submit' className="btn-primary">
                + Add
            </button>
        </form>
    )
}