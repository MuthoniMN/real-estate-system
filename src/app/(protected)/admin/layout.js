import Sidebar from "@/app/_components/Sidebar"
import { faHouseChimneyUser, faHouseCircleCheck, faHouseCircleExclamation, faUser, faUserEdit, faUserPlus } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
    title: 'Nyumbani Admin Dashboard',
    description: 'You can manage your agents, verify your properties and view your analytics here',
}

const links = [
    {
        link: "/admin/property/unverified",
        desc: "Unverified Properties",
        icon: faHouseCircleExclamation
    },
    {
        link: "/admin/property/verified",
        desc: "Verified Properties",
        icon: faHouseCircleCheck
    },
    {
        link: "/admin/property/rentals",
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
    return (
        <main className="flex gap-4" style={{ height: "100vh" }}>
            <Sidebar content={links} />
            <section className="clear ms-[32%] lg:ms-[20%] w-full h-full">
                {children}
            </section>
        </main>
    )
}