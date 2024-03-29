import { faBath, faBed } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

export default function Property({ img, title, location, price, beds, baths, id }) {
    return (
        <div className="p-4 shadow-sm hover:shadow-lg md:w-1/5">
            <Image src={img} alt={title} width={120} height={120} className="mx-auto" />
            <h3 className="text-xl font-bold text-theme-color text-center my-2">{title}</h3>
            <div className="flex justify-between my-2">
                <p className="italic">{location}</p>
                <p>{price}</p>
            </div>
            <div className="flex justify-between my-2">
                <p className="flex gap-2 h-[18px]"><FontAwesomeIcon icon={faBed} style={{ fontSize: "8px" }} />{beds}</p>
                <p className="flex gap-2 h-[18px]"><FontAwesomeIcon icon={faBath} style={{ fontSize: "8px" }} />{baths}</p>
            </div>
            <Button type={"button"}>
                <Link href={"/properties/" + id}>View Property</Link>
            </Button>
        </div>
    )
}