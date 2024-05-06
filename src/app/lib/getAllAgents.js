export default async function getAllAgents() {
    const data = await fetch(`http://localhost:3000/api/accounts?role=agent`)
    let result = await data.json()

    if (!data.ok) {
        throw new Error('Failed to fetch data')
    }

    return result
}
