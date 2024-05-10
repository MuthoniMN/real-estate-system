import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Image from "next/image"
import { getUserByID } from "@/app/lib/getUser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
    title: 'Agent Profile',
    description: 'A real estate company website where they showcase their properties and manage properties and agents',
  }

export default async function Profile(){
    const session = await getServerSession(authOptions)
    const user = await getUserByID(session.user.id)
    return (
        <section className="border-2 w-[3/4] py-4 px-8 relative">
            <Image src={user.profilePicture} alt={user.username} width={250} height={250} className="w-[250px] h-[250px] rounded-full"  />
            <h2>@{user.username}</h2>
            <div className="flex justify-between items-center">
                <p className="flex items-center gap-2">
                    <span className="bg-gray-300 px-2">
                        <FontAwesomeIcon icon={faPhone} />
                    </span>
                    {user.phone}
                </p>
                <p className="flex items-center gap-2">
                    <span className="bg-gray-300 px-2">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    {user.email}
                </p>
            </div>
            <p>
                {user.desc}
            </p>
        </section>
    )
}