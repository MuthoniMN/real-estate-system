import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Image from "next/image"
import { getUserByID } from "@/app/lib/getUser"

export default function Profile(){
    const session = getServerSession(authOptions)
    const user = getUserByID(session.user.id)
    return (
        <section className="border-2 w-[3/4] py-4 px-8 relative">
            <Image src={user.profilePicture} alt={user.username} width={250} height={250} className="w-[250px] h-[250px] rounded-full"  />
            <h2>@{user.username}</h2>
            <div className="flex justify-between items-center">
                <p className="flex items-center gap-2">
                    <span className="bg-gray-300 px-2">
                        <FontAwesomeIcon icon={} />
                    </span>
                    {user.phone}
                </p>
                <p className="flex items-center gap-2">
                    <span className="bg-gray-300 px-2">
                        <FontAwesomeIcon icon={} />
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