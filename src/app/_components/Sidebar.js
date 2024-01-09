import IconLink from "./IconLink";
import Logo from "./Logo";
import { faHouseChimneyUser, faHouseCircleCheck, faHouseCircleExclamation, faUser, faUserEdit, faUserPlus } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
    return (
        <nav className="bg-theme-color/15 p-4 rounded-e-[50px] w-1/8 h-full p-8 flex flex-col gap-6 items-center">
            <Logo />
            <IconLink link="/admin/property/unverified" linkDesc="Unverified Properties" icon={faHouseCircleExclamation} />
            <IconLink link="/admin/property/unverified" linkDesc="Verified Properties" icon={faHouseCircleCheck} />
            <IconLink link="/admin/property/unverified" linkDesc="Rental Properties" icon={faHouseChimneyUser} />
            <IconLink link="/admin/property/unverified" linkDesc="Agents" icon={faUser} />
            <IconLink link="/admin/property/unverified" linkDesc="Add Admin Account" icon={faUserPlus} />
            <IconLink link="/admin/property/unverified" linkDesc="Change Password" icon={faUserEdit} />
        </nav>
    )
}