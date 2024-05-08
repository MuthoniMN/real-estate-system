export default async function getAllAgents() {
    const data = await fetch(`https://real-estate-system.vercel.app/api/accounts?role=agent`)
    console.log(data);
    let result = await data.json()

    if (!data.ok) {
        throw new Error('Failed to fetch data')
    }

    return result
}
