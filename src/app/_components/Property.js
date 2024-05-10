import { faBath, faBed, faRuler } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import Button from "./Button"

export default function Property({ property, user = false }) {
    return (
        <div className="p-4 shadow-sm hover:shadow-lg md:w-1/5">
            <ImageCarousel images={property.images} desc={property.title} />
            <h3 className="text-xl font-bold text-theme-color text-center my-2">{property.title}</h3>
            <p className="italic">{property.location}</p>
            <p>
                <span className="bg-gray-300 px-2" >KSH</span>
                {property.price}
            </p>
            <div className="flex justify-between my-2">
                <p className="flex h-[18px]">
                    <span className="bg-gray-300 px-2" >
                        <FontAwesomeIcon icon={faBed} style={{ fontSize: "8px" }} />
                    </span>
                    {property.beds}
                </p>
                <p className="flex h-[18px]">
                    <span className="bg-gray-300 px-2" >
                        <FontAwesomeIcon icon={faBath} style={{ fontSize: "8px" }} />
                    </span>
                    {property.baths}</p>
                <p className="flex h-[18px]">
                    <span className="bg-gray-300 px-2" >
                        <FontAwesomeIcon icon={faRuler} style={{ fontSize: "8px" }} />
                    </span>
                    {property.area}</p>
            </div>
            {user ?
                <div className="flex justify-between">
                    <Button type={"button"}>
                        <Link href={"/agent/properties/edit" + id}>Edit</Link>
                    </Button>
                    <Button type={"button"}>
                        <Link href={"/agent/properties/edit" + id}>Delete</Link>
                    </Button>
                </div>
                :
                <Button type={"button"}>
                    <Link href={"/properties/" + id}>View Property</Link>
                </Button>
            }
        </div>
    )
}