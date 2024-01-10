export default async function getUser(email) {
    const data = await fetch(`${process.env.BASE_URL}/api/accounts?email=${email}`)

    if (!data.ok) {
        throw new Error('Failed to fetch data')
    }

    return data.json()
}