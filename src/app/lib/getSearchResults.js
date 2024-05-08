export default async function getSearchResults(query) {
    try {
        const data = await fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=5`)

        let result = await data.json()
        return result;
    } catch (err) {
        console.error(err)
        throw new Error('Failed to fetch data')
    }

}