"use client"
import Image from "next/image"
import Link from "next/link"
import { signIn, signOut, useSession, getProviders } from "next-auth/react"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
    const isUserSignedIn = true;
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false)

    useEffect(() => {
        const getAndSetProviders = async () => {
            const res = await getProviders()

            setProviders(res)
        }
        getAndSetProviders();
    }, [])
    return (
        <nav className="flex py-4 px-8 justify-between items-center">
            <Link href={"/"}>
                <div className="flex items-center gap-2">
                    <Image src="/Nyumbani-Real-Estate.png" alt="Nyumbani Real Estate" width={56} height={56} className="rounded" />
                    <span className="font-bold">Nyumbani<br />Real Estate</span>
                </div>
            </Link>
            <ul className="sm:flex gap-4 items-center hidden">
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
                    {!isUserSignedIn && <Link href={"/signin"} className="py-2 px-4 transition-all hover:bg-theme-color hover:text-white border-2 border-theme-color text-theme-color">Sign In</Link>}
                    {isUserSignedIn && <button onClick={() => signOut()} className="py-2 px-4 transition-all hover:bg-theme-color hover:text-white border-2 border-theme-color text-theme-color">Log Out</button>}
                </li>
            </ul>
            {isUserSignedIn && <Link href={"/properties/add"} className="bg-theme-color py-2 px-4 transition-all hover:rounded-2xl sm:block hidden">Add a Listing</Link>}
            <FontAwesomeIcon icon={faBars} style={{ color: "#E8AE00", fontSize: "32px" }} className="md:hidden" onClick={() => setToggleDropdown((prev) => !prev)} />
            {toggleDropdown && <div className="absolute top-20 left-0 right-0 h-full bg-white p-5 md:hidden">
                <ul className="flex gap-4 items-center justify-center flex-col">
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
                        {!isUserSignedIn && <Link href={"/signin"} className="py-2 px-4 transition-all hover:bg-theme-color hover:text-white border-2 border-theme-color text-theme-color">Sign In</Link>}
                        {isUserSignedIn && <button onClick={() => signOut()} className="py-2 px-4 transition-all hover:bg-theme-color hover:text-white border-2 border-theme-color text-theme-color">Log Out</button>}
                    </li>
                    <li>
                        {isUserSignedIn && <Link href={"/properties/add"} className="bg-theme-color py-2 px-4 transition-all hover:rounded-2xl">Add a Listing</Link>}
                    </li>
                </ul>
            </div>}
        </nav>
    )
}