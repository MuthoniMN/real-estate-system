export default async function getUser(email) {
    const data = await fetch(`${process.env.BASE_URL}/api/accounts?email=${email}`)

    if (!data.ok) {
        throw new Error('Failed to fetch data')
    }

    return data.json()
}

export async function getUserByID(id) {
    try {
        const data = await fetch(`http://localhost:3000/api/accounts/${id}`)
        let result = await data.json()
        return result

    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch data')
    }

}