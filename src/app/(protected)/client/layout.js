"use client"

import Sidebar from "@/app/_components/Sidebar";
import { faHome, faHouseChimneyUser, faHouseCircleCheck, faHouseLock } from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const links = [
    {
        link: "/client",
        desc: "Dashboard",
        icon: faHome
    },
    {
        link: "/client/properties/favourites",
        desc: "Favourites",
        icon: faHouseCircleCheck
    },
    {
        link: "/client/appointments",
        desc: "Booked Viewings",
        icon: faHouseChimneyUser
    }
]

export default function ClientLayout({ children }) {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/signin?callbackUrl=/client')
        }
    })

    if (!session) {
        redirect('/signin?callbackUrl=/admin')
    } else if (session.user.role !== 'client') {
        redirect('/unauthorized')
    }
    return (
        <main className="flex gap-4" style={{ height: "100vh" }}>
            <Sidebar content={links} />
            <section className="clear ms-[32%] lg:ms-[20%] w-full h-full">
                {children}
            </section>
        </main>
    )
}