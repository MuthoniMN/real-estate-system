import IconLink from "./IconLink";
import Logo from "./Logo";
import { faHouseChimneyUser, faHouseCircleCheck, faHouseCircleExclamation, faUser, faUserEdit, faUserPlus } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
    return (
        <nav className="bg-theme-color/15 p-4 rounded-e-[50px] w-1/8 h-full p-8 flex flex-col gap-6 items-center fixed me-4">
            <Logo />
            <IconLink link="/admin/property/unverified" linkDesc="Unverified Properties" icon={faHouseCircleExclamation} />
            <IconLink link="/admin/property/verified" linkDesc="Verified Properties" icon={faHouseCircleCheck} />
            <IconLink link="/admin/property/rentals" linkDesc="Rental Properties" icon={faHouseChimneyUser} />
            <IconLink link="/admin/property/agents" linkDesc="Agents" icon={faUser} />
            <IconLink link="/admin/property/accounts" linkDesc="Add Admin Account" icon={faUserPlus} />
            <IconLink link="/change-password" linkDesc="Change Password" icon={faUserEdit} />
        </nav>
    )
}