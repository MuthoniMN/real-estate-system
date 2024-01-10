export default async function getUser(email) {
    const data = await fetch(`http://localhost:3000/api/accounts?email=${email}`)

    if (!data.ok) {
        throw new Error('Failed to fetch data')
    }

    return data.json()
}