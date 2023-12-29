export default function Add() {
    return (
        <section className="p-4">
            <h1 className="text-3xl text-theme-color font-bold text-center">Add a Property</h1>
            <p className="md:w-1/3 mx-auto my-2 italic">You can add a listing here but it will be added to our properties once we have verified it.</p>
            <form className="md:w-1/3 mx-auto my-4">
                <div className="my-2">
                    <label htmlFor="title">Property Title: </label>
                    <input type="text" id="title" placeholder="e.g., A 3BR Mansion in Ngong" className="w-full mt-2 p-2 border-2 border-theme-color" />
                </div>
                <div className="my-2">
                    <label htmlFor="location">Location: </label>
                    <input type="text" id="location" placeholder="e.g. Nairobi, Kenya" className="w-full mt-2 p-2 border-2 border-theme-color" />
                </div>
                <div className="my-2">
                    <label htmlFor="type">Type: </label>
                    <select id="type" className="w-full mt-2 p-2 border-2 border-theme-color">
                        <option>Single Room</option>
                        <option>Bedsitter</option>
                        <option>Apartment</option>
                        <option>Penthouse</option>
                        <option>Bungalow</option>
                        <option>Mansion</option>
                    </select>
                </div>
                <div className="my-2">
                    <label htmlFor="price">Price: </label>
                    <input type="number" id="price" placeholder="e.g. 15000" className="w-full mt-2 p-2 border-2 border-theme-color" />
                </div>
                <div className="my-2">
                    <label htmlFor="bathrooms">Number of Bathrooms: </label>
                    <input type="number" id="bathrooms" placeholder="e.g. 1" className="w-full mt-2 p-2 border-2 border-theme-color" />
                </div>
                <div className="my-2">
                    <label htmlFor="bedrooms">Number of Bedrooms: </label>
                    <input type="number" id="bedrooms" placeholder="e.g. 1" className="w-full mt-2 p-2 border-2 border-theme-color" />
                </div>
                <input type="submit" value={"Add Property"} className="bg-theme-color py-2 px-4 block mx-auto my-6" />
            </form>
        </section>
    )
}