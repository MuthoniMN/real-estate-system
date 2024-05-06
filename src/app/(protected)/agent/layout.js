"use client"

import Sidebar from "@/app/_components/Sidebar";
import { faHome, faHouseChimneyUser, faHouseMedicalCircleCheck, faHouseCircleXmark, faHouseCircleCheck, faHouseLock, faUserEdit, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const links = [
    {
        link: "/agents",
        desc: "Dashboard",
        icon: faHome
    },
    {
        link: "/agents/properties/new",
        desc: "Add Property",
        icon: faHouseMedicalCircleCheck
    },
    {
        link: "/agents/properties/approved",
        desc: "Approved Properties",
        icon: faHouseCircleCheck
    },
    {
        link: "/agents/properties/unapproved",
        desc: "Unapproved Properties",
        icon: faHouseCircleXmark
    },
    {
        link: "/agents/properties/manage",
        desc: "Manage Properties",
        icon: faHouseChimneyUser
    },
    {
        link: "/agents/profile",
        desc: "Profile",
        icon: faUserCircle
    },
    {
        link: "/change-password",
        desc: "Change Password",
        icon: faUserEdit
    }
]

export default function AgentLayout({ children }) {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/signin?callbackUrl=/agent')
        }
    })

    if (!session) {
        redirect('/signin?callbackUrl=/admin')
    } else if (session.user.role !== 'agent') {
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