export default async function getAllAgents() {
    const data = await fetch(`/api/accounts?role=agent`)
    let result = await data.json()

    if (!data.ok) {
        throw new Error('Failed to fetch data')
    }

    return result
}
