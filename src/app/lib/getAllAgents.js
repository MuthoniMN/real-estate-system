export default async function getAllAgents() {
    const data = await fetch(`${process.env.BASE_URL}/api/accounts?role=agent`)

    if (!data.ok) {
        throw new Error('Failed to fetch data')
    }

    return data.json()
}
