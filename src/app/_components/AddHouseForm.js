"use client"
import { useState, useEffect } from "react";
import Button from "./Button";
import ImagePreview from "./ImagePreview";
import { getUserDetails } from "../lib/getUser";
import { useSession } from "next-auth/react";

export default function AddHouseForm({ property = null, location, action }) {
    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")
    const [agent, setAgent] = useState("")
    const [pictures, setPictures] = useState([])
    const { data: session } = useSession()

    useEffect(() => {
        const getAgent = async () => {
            let agentId = await getUserDetails(session.user.email)

            setAgent(agentId)
        }
        getAgent()

    }, [])

    const upload = (e) => {
        if (e.target.files) {
            const _files = Array.from(e.target.files);
            setPictures([..._files]);
        }
    }

    const createAction = action.bind(null, agent, location)

    return (
        <section className="w-[75%]  scroll-auto">
            <h2 className="text-2xl my-4 font-semibold">Add a New Property: House</h2>
            <form action={createAction} className="w-[100%] flex flex-col gap-4 scroll" >
                {success && <p className="bg-green-100 text-green-500">{success}</p>}
                {error && <p className="bg-red-300 text-red-600">{error}</p>}
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" name="title" value={property ? property.title : ""} className="border-2 border-yellow-300 px-4 py-2 w-[100%]" />
                </div>
                <div>
                    <label htmlFor="desc">Description: </label>
                    <textarea type="text" id="desc" name="desc" value={ property ? property.desc : ""} className="border-2 border-yellow-300 px-4 py-2 w-[100%]"></textarea>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <label htmlFor="type">Type: </label>
                        <select id="type" name="type" value={property ? property.type : ""} className="border-2 border-yellow-300 px-4 py-2 w-28">
                            <option value="Rent">Rental</option>
                            <option value="Sale">Sale</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="price">Price: </label>
                        <input type="number" id="price" name="price" value={property ? property.price : 0} className="border-2 border-yellow-300 px-4 py-2" />
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <label htmlFor="beds">Bedrooms: </label>
                        <input type="number" id="beds" name="beds" value={property ? property.beds : 0} className="border-2 border-yellow-300 px-4 py-2 w-24 block" />
                    </div>
                    <div>
                        <label htmlFor="baths">Bathrooms: </label>
                        <input type="number" id="baths" name="baths" value={property ? property.baths : 0} className="border-2 border-yellow-300 px-4 py-2 w-24 block" />
                    </div>
                    <div>
                        <label htmlFor="area">Area: </label>
                        <input type="number" id="area" name="area" value={property ? property.area : 0} className="border-2 border-yellow-300 px-4 py-2 w-24 block" />
                    </div>
                </div>
                <div>
                    <label htmlFor="pictures">Pictures: </label>
                    <input type="file" multiple id="pictures" name="pictures" accept="image/*" aria-describedby="file_input_help" onChange={(e) => upload(e)} className="px-4 py-2 file:bg-theme-color file:px-4 file:py-2 file:transition-all hover:file:rounded-2xl hover:file:bg-theme-color/85" />
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                </div>
                { pictures && <ImagePreview images={pictures} /> }
    <Button type="submit">Add Property</Button>
            </form >
        </section >
    )
}