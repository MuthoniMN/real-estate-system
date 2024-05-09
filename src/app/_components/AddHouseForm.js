"use client"
import { useState } from "react";
import { notEmpty } from "../utils/validate";
import Button from "./Button";
import ImagePreview from "./ImagePreview";

export default function AddHouseForm({ property, setProperty }) {
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const upload = (e) => {
        if (e.target.files) {
            const _files = Array.from(e.target.files);
            setProperty({...property, pictures: _files});
            console.log(property);
          }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(land)

        if(!notEmpty([property.title, property.desc, property.location, property.agent, property.price, property.type, property.beds, property.baths, property.area, property.pictures])){
            setError("Please fill all the fields!")
        }
    }
    return (
        <section className="w-[75%]">
            <h2 className="text-2xl my-4 font-semibold">Add a New Property: House</h2>
            <form className="w-[100%] flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)} >
                {success && <p className="bg-green-100 text-green-500">{success}</p>}
                {error && <p className="bg-red-300 text-red-600">{error}</p>}
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" value={property.title} onChange={(e) => setProperty({ ...property, title: e.target.value })} className="border-2 border-yellow-300 px-4 py-2 w-[100%]" />
                </div>
                <div>
                    <label htmlFor="desc">Description: </label>
                    <textarea type="text" id="desc" value={property.desc} aria-describedby="description_help" onChange={(e) => setProperty({ ...property, desc: e.target.value })} className="border-2 border-yellow-300 px-4 py-2 w-[100%]"></textarea>
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="description_help">{250 - (property.desc.length || 0)} characters remaining</p>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <label htmlFor="type">Type: </label>
                        <select id="type" value={property.type} onChange={(e) => setProperty({ ...property, type: e.target.value })} className="border-2 border-yellow-300 px-4 py-2 w-28">
                            <option value="Rent">Rental</option>
                            <option value="Sale">Sale</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="price">Price: </label>
                        <input type="number" id="price" value={property.price} onChange={(e) => setProperty({ ...property, price: e.target.value })} className="border-2 border-yellow-300 px-4 py-2" />
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <label htmlFor="beds">Bedrooms: </label>
                        <input type="number" id="beds" value={property.beds} onChange={(e) => setProperty({ ...property, beds: e.target.value })} className="border-2 border-yellow-300 px-4 py-2 w-24 block" />
                    </div>
                    <div>
                        <label htmlFor="baths">Bathrooms: </label>
                        <input type="number" id="baths" value={property.baths} onChange={(e) => setProperty({ ...property, baths: e.target.value })} className="border-2 border-yellow-300 px-4 py-2 w-24 block" />
                    </div>
                    <div>
                        <label htmlFor="area">Area: </label>
                        <input type="number" id="area" value={property.area} onChange={(e) => setProperty({ ...property, area: e.target.value })} className="border-2 border-yellow-300 px-4 py-2 w-24 block" />
                    </div>
                </div>
                <div>
                    <label htmlFor="pictures">Pictures: </label>
                    <input type="file" multiple id="pictures" accept="image/*" aria-describedby="file_input_help" onChange={(e) => upload(e)} className="px-4 py-2 file:bg-theme-color file:px-4 file:py-2 file:transition-all hover:file:rounded-2xl hover:file:bg-theme-color/85" />
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
                { property.pictures && <ImagePreview images={property.pictures} />}
                <Button type="submit">Add Property</Button>
            </form>
        </section>
    )
}