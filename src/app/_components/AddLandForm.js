"use client"
import { useState } from "react";
import { notEmpty } from "../utils/validate";
import Button from "./Button";
import ImagePreview from "./ImagePreview"
import createListing from "../createLandListing";

export default function AddLandForm({ land, setLand }) {
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const upload = (e) => {
        if (e.target.files) {
            const _files = Array.from(e.target.files);
            setLand({...land, pictures: _files})
            console.log(land);
          }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(land)

        if(!notEmpty([land.title, land.desc, land.location, land.agent, land.price, land.type, land.dimensions, land.area, land.pictures])){
            setError("Please fill all the fields!")
        }

        let createResults = await createListing(land)

        if(createResults.status == "error"){
            setError(createResults.message)
        }else{
            setSuccess(createResults.message)
        }
    }
    return (
        <section className="w-[75%] scroll">
            <h2 className="text-2xl my-4 font-semibold">Add a New Property: Land</h2>
            <form className="w-[100%] flex flex-col gap-4" onSubmit={(e) => handleSubmit(e)} >
                {success && <p className="bg-green-100 text-green-500">{success}</p>}
                {error && <p className="bg-red-300 text-red-600">{error}</p>}
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" value={land.title} onChange={(e) => setLand({ ...land, title: e.target.value })} className="border-2 border-yellow-300 px-4 py-2 w-[100%]" />
                </div>
                <div>
                    <label htmlFor="desc">Description: </label>
                    <textarea id="desc" value={land.desc} aria-describedby="description_help" onChange={(e) => setLand({ ...land, desc: e.target.value })} className="border-2 border-yellow-300 px-4 py-2 w-[100%]"></textarea>
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="description_help">{250 - (land.desc ? land.desc.length : 0)} characters remaining</p>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <label htmlFor="type">Type: </label>
                        <select id="type" value={land.type} onChange={(e) => setLand({ ...land, type: e.target.value })} className="border-2 border-yellow-300 px-4 py-2 w-28">
                            <option value="Lease">Lease</option>
                            <option value="Sale">Sale</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="price">Price: </label>
                        <input type="number" id="price" value={land.price} onChange={(e) => setLand({ ...land, price: e.target.value })} className="border-2 border-yellow-300 px-4 py-2" />
                    </div>
                </div>
                <div className="flex justify-between items-center w-[100%]">
                    <div>
                        <label htmlFor="dimensions">Dimensions: </label>
                        <input type="text" id="dimensions" value={land.dimensions} onChange={(e) => setLand({ ...land, dimensions: e.target.value })} placeholder="50 * 100" className="border-2 border-yellow-300 px-4 py-2 block" />
                    </div>
                    <div>
                        <label htmlFor="area">Area: </label>
                        <input type="number" id="area" value={land.area} onChange={(e) => setLand({ ...land, area: e.target.value })} className="border-2 border-yellow-300 px-4 py-2 w-24 block" />
                    </div>
                </div>
                <div>
                    <label htmlFor="pictures">Pictures: </label>
                    <input type="file" multiple id="pictures" accept="image/*" aria-describedby="file_input_help" onChange={(e) => upload(e)} className="px-4 py-2 file:bg-theme-color file:px-4 file:py-2 file:transition-all hover:file:rounded-2xl hover:file:bg-theme-color/85" />
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
                { land.pictures && <ImagePreview images={land.pictures} />}
                <Button type="submit">Add Property</Button>
            </form>
        </section>
    )
}