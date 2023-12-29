import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex py-4 px-8 justify-between items-center">
            <Link href={"/"}>
                <div className="flex items-center gap-2">
                    <Image src="/Nyumbani-Real-Estate.png" alt="Nyumbani Real Estate" width={56} height={56} className="rounded" />
                    <span className="font-bold">Nyumbani<br />Real Estate</span>
                </div>
            </Link>
            <ul className="flex gap-4">
                <li>
                    <Link href={"/"} className="font-bold">Home</Link>
                </li>
                <li>
                    <Link href={"/properties/sale"} className="hover:font-bold">For Sale</Link>
                </li>
                <li>
                    <Link href={"/properties/rent"} className="hover:font-bold">For Rent</Link>
                </li>
                <li>
                    <Link href={"/signin"} className="hover:font-bold">Sign In</Link>
                </li>
            </ul>
            <button className="bg-theme-color py-2 px-4">Add a Listing</button>
        </nav>
    )
}