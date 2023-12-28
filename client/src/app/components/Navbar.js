import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex py-4 px-8 justify-between items-center">
            <div className="flex items-center gap-2">
                <span className="font-bold">Nyumbani<br />Real Estate</span>
                <Image src="/Nyumbani-Real-Estate.png" alt="Nyumbani Real Estate" width={56} height={56} className="rounded" />
            </div>
            <ul className="flex gap-4">
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/properties/sale"}>For Sale</Link>
                </li>
                <li>
                    <Link href={"/properties/rent"}>For Rent</Link>
                </li>
                <li>
                    <Link href={"/signin"}>Sign In</Link>
                </li>
            </ul>
            <button className="bg-theme-color py-2 px-4">Add a Listing</button>
        </nav>
    )
}