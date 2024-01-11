import Sidebar from "@/app/_components/Sidebar"
import { faHome, faHouseChimneyUser, faHouseCircleCheck, faHouseLock } from "@fortawesome/free-solid-svg-icons"

const links = [
    {
        link: "/client",
        desc: "Dashboard",
        icon: faHome
    },
    {
        link: "/client/properties/all-properties",
        desc: "All Properties",
        icon: faHouseCircleCheck
    },
    {
        link: "/client/properties/rentals",
        desc: "Rental Properties",
        icon: faHouseChimneyUser
    },
    {
        link: "/client/properties/",
        desc: "My Properties",
        icon: faHouseLock
    },
]

export default function AgentLayout({ children }) {
    return (
        <>
            <Sidebar content={links} />
        </>
    )
}