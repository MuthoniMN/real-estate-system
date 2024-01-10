export default async function getAllAdmins() {
    const data = await fetch("http://localhost:3000/api/accounts?role=admin")

    if (!data.ok) {
        throw new Error('Failed to fetch data')
    }

    return data.json()
}