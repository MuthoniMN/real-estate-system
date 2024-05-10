"use client"

import Sidebar from "@/app/_components/Sidebar"
import { faHome, faHomeAlt, faHouseChimneyUser, faHouseCircleCheck, faHouseCircleExclamation, faUser, faUserEdit, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

// export const metadata = {
//     title: 'Nyumbani Admin Dashboard',
//     description: 'You can manage your agents, verify your properties and view your analytics here',
// }

const links = [
    {
        link: "/admin",
        desc: "Dashboard",
        icon: faHome
    },
    {
        link: "/admin/properties/unverified",
        desc: "Unverified Properties",
        icon: faHouseCircleExclamation
    },
    {
        link: "/admin/properties/verified",
        desc: "Verified Properties",
        icon: faHouseCircleCheck
    },
    {
        link: "/admin/properties/rentals",
        desc: "Rental Properties",
        icon: faHouseChimneyUser
    },
    {
        link: "/admin/agents",
        desc: "Agents",
        icon: faUser
    },
    {
        link: "/admin/accounts",
        desc: "Add Admin Account",
        icon: faUserPlus
    },
    {
        link: "/change-password",
        desc: "Change Password",
        icon: faUserEdit
    }
]

export default function AdminLayout({ children }) {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/signin?callbackUrl=/admin')
        }
    })

    if (!session) {
        redirect('/signin?callbackUrl=/admin')
    } else if (session.user.role !== 'admin') {
        redirect('/unauthorized')
    }
    return (
        <body className="overflow-hidden">
            <main className="flex gap-4" style={{ height: "100vh" }}>
                <Sidebar content={links} />
                <section className="clear ms-[32%] lg:ms-[20%] w-full h-full">
                    {children}
                </section>
            </main>
        </body>

    )
}