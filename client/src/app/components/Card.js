import Image from "next/image"
import Link from "next/link"

export default function Card({ img, title, desc, link, btnText }) {
    return (
        <div className="p-4 shadow-sm hover:shadow-lg md:w-1/5">
            <Image src={img} alt={title} width={120} height={120} className="mx-auto" />
            <h3 className="text-xl font-bold text-theme-color text-center my-2">{title}</h3>
            <p>{desc}</p>
            <Link href={link} className="block w-fit my-2 mx-auto bg-theme-color py-2 px-4 transition-all hover:underline hover:font-bold">{btnText}</Link>
        </div>
    )
}