export async function updateUser(id, updates) {
    const data = await fetch(`/api/accounts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            ...updates
        })
    })

    if (!data.ok) {
        throw new Error("Failed to update user's data")
    }

    return data.json()
}