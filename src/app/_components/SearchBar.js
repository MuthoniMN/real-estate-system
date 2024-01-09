export default function SearchBar() {
    return (
        <form className="mx-auto bg-white -mt-8 p-4 rounded-md w-fit">
            <input placeholder="Enter a location" className="p-2 mx-2 border-2 rounded-sm" />
            <select className="p-2 mx-2 border-2 rounded-sm">
                <option>Price</option>
                <option>Ksh 10, 000 - Ksh 15, 000</option>
                <option>Ksh 15, 000 - Ksh 20, 000</option>
                <option>Ksh 20, 000 - Ksh 30, 000</option>
                <option>Ksh 30, 000 - Ksh 40, 000</option>
                <option>Ksh 40, 000 - Ksh 50, 000</option>
            </select>
            <select className="p-2 mx-2 border-2 rounded-sm">
                <option>Bedrooms</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <select className="p-2 mx-2 border-2 rounded-sm">
                <option>Bathrooms</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
            <select className="p-2 mx-2 border-2 rounded-sm">
                <option>Property Type</option>
                <option>Single Room</option>
                <option>Bedsitter</option>
                <option>Apartment</option>
                <option>Penthouse</option>
                <option>Bungalow</option>
                <option>Mansion</option>
            </select>
            <input type="submit" value={"Search"} className="bg-theme-color hover:bg-theme-color/85 py-2 px-4 transition-all hover:rounded-2xl" />
        </form>
    )
}