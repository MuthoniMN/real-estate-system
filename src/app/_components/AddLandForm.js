"use client"
import { useState } from "react";
import Button from "./Button";
import ImagePreview from "./ImagePreview"

export default function AddLandForm({ land, setLand }) {
    const [pictures, setPictures] = useState([])
    const upload = (e) => {
        if (e.target.files) {
            const _files = Array.from(e.target.files);
            setLand({...land, pictures: _files})
            _files.forEach(img => {
                let reader = new FileReader();
                reader.onLoad(() => {
                    setPictures([...pictures, { src: reader.result, title: img.name }])
                })
                reader.readAsDataURL(img)
            });
            console.log(land.pictures, pictures);
          }
    }
    return (
        <section className="w-[75%]">
            <h2 className="text-2xl my-4 font-semibold">Add a New Property: Land</h2>
            <form className="w-[100%] flex flex-col gap-4">
                <div>
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" value={land.title} onChange={(e) => setLand({ ...land, title: e.target.value })} className="border-2 border-yellow-300 px-4 py-2 w-[100%]" />
                </div>
                <div>
                    <label htmlFor="desc">Description: </label>
                    <textarea id="desc" value={land.desc} onChange={(e) => setLand({ ...land, desc: e.target.value })} className="border-2 border-yellow-300 px-4 py-2 w-[100%]"></textarea>
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
                    <input type="file" multiple id="pictures" value={land.pictures} onChange={(e) => upload(e)} className="px-4 py-2 file:bg-theme-color file:px-4 file:py-2 file:transition-all hover:file:rounded-2xl hover:file:bg-theme-color/85" />
                </div>
                { land.pictures && <ImagePreview images={pictures} />}
                <Button type="submit">Add Property</Button>
            </form>
        </section>
    )
}