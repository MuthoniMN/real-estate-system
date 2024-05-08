export default async function getUser(email) {
    const data = await fetch(`https://real-estate-system.vercel.app/api/accounts?email=${email}`)

    if (!data.ok) {
        throw new Error('Failed to fetch data')
    }

    return data.json()
}

export async function getUserByID(id) {
    try {
        const data = await fetch(`https://real-estate-system.vercel.app/api/accounts/${id}`)
        let result = await data.json()
        return result

    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch data')
    }

}

export async function getUserByUsername(username) {
    try {
        const data = await fetch(`https://real-estate-system.vercel.app/api/accounts?username=${username}`)
        let result = await data.json()
        return result

    } catch (error) {
        console.error(error)
        throw new Error('Failed to fetch data')
    }

}