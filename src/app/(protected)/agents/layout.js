import Sidebar from "@/app/_components/Sidebar"
import { faHome, faHouseChimneyUser, faHouseCircleCheck, faHouseLock, faUserEdit } from "@fortawesome/free-solid-svg-icons"

const links = [
    {
        link: "/agents",
        desc: "Dashboard",
        icon: faHome
    },
    {
        link: "/agents/properties/all-properties",
        desc: "All Properties",
        icon: faHouseCircleCheck
    },
    {
        link: "/agents/properties/rentals",
        desc: "Rental Properties",
        icon: faHouseChimneyUser
    },
    {
        link: "/admin/properties/sold-properties",
        desc: "Sold Properties",
        icon: faHouseLock
    },
    {
        link: "/change-password",
        desc: "Change Password",
        icon: faUserEdit
    }
]

export default function AgentLayout({ children }) {
    return (
        <>
            <Sidebar content={links} />
        </>
    )
}