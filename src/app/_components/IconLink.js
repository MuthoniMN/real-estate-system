import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export default function IconLink({ link, icon, linkDesc }) {
    return (
        <Link href={link} className="flex gap-2 items-center justify-between md:w-full">
            <FontAwesomeIcon icon={icon} style={{ height: "32px" }} />
            <span className="hidden md:block w-full">{linkDesc}</span>
        </Link>
    )
}