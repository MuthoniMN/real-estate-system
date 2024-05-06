export default async function getAllAdmins() {
    try {
        const data = await fetch('http://localhost:3000/api/accounts?role=admin')

        let result = await data.json()
        return result;
    } catch (err) {
        console.error(err)
        throw new Error('Failed to fetch data')
    }

}