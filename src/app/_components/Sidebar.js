import { signOut } from "next-auth/react";
import IconLink from "./IconLink";
import Button from "@/app/_components/Button"
import Logo from "./Logo";
import { redirect } from "next/navigation";

export default function Sidebar({ content }) {
    return (
        <nav className="bg-theme-color/15 p-4 rounded-e-[50px] md:w-1/8 h-full md:p-8 flex flex-col gap-6 items-center justify-center fixed me-4">
            <Logo />
            {content.map((link, index) => {
                return <IconLink link={link.link} linkDesc={link.desc} icon={link.icon} key={index} />
            })}
            <Button func={() => { signOut(); redirect('/') }}>Log Out</Button>
        </nav>
    )
}