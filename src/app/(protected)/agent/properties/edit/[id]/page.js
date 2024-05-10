"use client"
import AddHouseForm from "@/app/_components/AddHouseForm";
import AddLandForm from "@/app/_components/AddLandForm";
import { useEffect } from "react";
import { getProperty } from "@app/lib/properties"

const EditProperty = ({ params }) => {
    const id = params.id;
    let property;

    useEffect( () => {
        async function getPropertyDetails(){
            property = await getProperty(id)
        }

        getPropertyDetails()
    }, [] )
    return (
        <main className="flex justify-center items-center h-[100vh] scroll">
           {
            property.type === "House" ?
            <AddHouseForm property={property} />
            :
            <AddLandForm land={property} />
            }

        </main>
    )
}

export default EditProperty