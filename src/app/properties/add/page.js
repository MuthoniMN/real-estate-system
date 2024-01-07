import { useState } from "react"

export default function Add() {
    const [post, setPost] = useState({
        title: "",
        location: "",
        type: "",
        price: 0,
        bathrooms: 0,
        bedrooms: 0
    });
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <section className="p-6">
            <h1 className="text-3xl text-theme-color font-bold text-center">Add a Property</h1>
            <p className="md:w-1/3 mx-auto my-4 italic text-center">You can add a listing here but it will be added to our properties once we have verified it.</p>
            <form className="md:w-1/3 mx-auto my-4" onSubmit={(e) => handleSubmit(e)}>
                <div className="my-2">
                    <label htmlFor="title">Property Title: </label>
                    <input type="text" id="title" placeholder="e.g., A 3BR Mansion in Ngong" className="w-full mt-2 p-2 border-2 border-theme-color" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
                </div>
                <div className="my-2">
                    <label htmlFor="location">Location: </label>
                    <input type="text" id="location" placeholder="e.g. Nairobi, Kenya" className="w-full mt-2 p-2 border-2 border-theme-color" value={post.location} onChange={(e) => setPost({ ...post, location: e.target.value })} />
                </div>
                <div className="my-2">
                    <label htmlFor="type">Type: </label>
                    <select id="type" className="w-full mt-2 p-2 border-2 border-theme-color" value={post.type} onChange={(e) => setPost({ ...post, type: e.target.value })}>
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
                    <input type="number" id="price" placeholder="e.g. 15000" className="w-full mt-2 p-2 border-2 border-theme-color" value={post.price} onChange={(e) => setPost({ ...post, price: e.target.value })} />
                </div>
                <div className="my-2">
                    <label htmlFor="bathrooms">Number of Bathrooms: </label>
                    <input type="number" id="bathrooms" placeholder="e.g. 1" className="w-full mt-2 p-2 border-2 border-theme-color" value={post.bathrooms} onChange={(e) => setPost({ ...post, bathrooms: e.target.value })} />
                </div>
                <div className="my-2">
                    <label htmlFor="bedrooms">Number of Bedrooms: </label>
                    <input type="number" id="bedrooms" placeholder="e.g. 1" className="w-full mt-2 p-2 border-2 border-theme-color" value={post.bedrooms} onChange={(e) => setPost({ ...post, bedrooms: e.target.value })} />
                </div>
                <input type="submit" value={"Add Property"} className="bg-theme-color py-2 px-4 block mx-auto my-6 transition-all hover:rounded-2xl" />
            </form>
        </section>
    )
}