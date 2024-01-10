export default async function getAllAdmins() {
    const data = await fetch(`${process.env.BASE_URL}/api/accounts?role=admin`)

    if (!data.ok) {
        throw new Error('Failed to fetch data')
    }

    return data.json()
}