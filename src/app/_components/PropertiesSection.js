"use client"
import { useState } from 'react';
import Pagination from "./Pagination"
import Property from "./Property"

export default function PropertiesSection( { title, properties, max } ){
    const [currentPage, setCurrentPage] = useState(1);
    const end = currentPage * max
    const start = end - max

    const page = properties.splice(start, end)
    return (
        <section>
            <h2>{title}</h2>
            <div className='flex justify-between items-center w-full h-full'>
                { page && page.map(property => <Property property={property} small key={property._id} />)}
                {!properties && (<p>No Properties Yet...</p>) }
            </div>
            <Pagination total={properties.title} max={max} current={currentPage} setCurrent={setCurrentPage} />
        </section>
    )
}