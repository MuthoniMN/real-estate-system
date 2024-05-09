"use client"
import { useState } from "react";
import Button from "./Button";
import ImagePreview from "./ImagePreview";

export default function AddHouseForm({ property, setProperty }) {
    const [pictures, setPictures] = useState([])
    const upload = (e) => {const arr = []
        console.log(e.target.files);
        if (e.target.files) {
            const _files = Array.from(e.target.files);
            console.log(_files);
            _files.forEach(img => {
                const src = URL.createObjectURL(img) 
                arr.push({ src: src, title: img.name })
            });
            setProperty({...property, pictures: _files});
            setPictures(arr)
            console.log(property.pictures, pictures);
          }
    }

    return (
        <section className="w-[75%]">
            <h2 className="text-2xl my-4 font-semibold">Add a New Property: House</h2>
            <form className="w-[100%] flex flex-col gap-4">
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" value={property.title} onChange={(e) => setProperty({ ...property, title: e.target.value })} className="border-2 border-yellow-300 px-4 py-2 w-[100%]" />
                </div>
                <div>
                    <label htmlFor="desc">Description: </label>
                    <textarea type="text" id="desc" value={property.desc} onChange={(e) => setProperty({ ...property, desc: e.target.value })} className="border-2 border-yellow-300 px-4 py-2 w-[100%]"></textarea>
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
                    <input type="file" multiple id="pictures" value={property.pictures} onChange={(e) => upload(e)} className="px-4 py-2 file:bg-theme-color file:px-4 file:py-2 file:transition-all hover:file:rounded-2xl hover:file:bg-theme-color/85" />
                </div>
                { property.pictures && <ImagePreview images={pictures} />}
                <Button type="submit">Add Property</Button>
            </form>
        </section>
    )
}