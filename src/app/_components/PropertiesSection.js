"use client"
import { useState } from 'react';
import Pagination from "./Pagination"
import Property from "./Property"

export default function PropertiesSection( { title, properties, max } ){
    console.log(properties);
    const [currentPage, setCurrentPage] = useState(1);
    const end = currentPage * max
    const start = end - max
    let page

    if(properties.length > 0 ) page = properties.splice(start, end)
    return (
        <section className='w-full h-[100%] py-8'>
            <h2 className='text-3xl font-bold' >{title}</h2>
            <div className='flex justify-between items-center w-full h-[100%]'>
                { page && page.map(property => <Property property={property} small key={property._id} />)}
                {properties.length === 0 && (<p className="w-full text-center" >No Properties Yet...</p>) }
            </div>
            {properties.length > 0 && <Pagination total={properties.title} max={max} current={currentPage} setCurrent={setCurrentPage} />}
        </section>
    )
}