import { getServerSession } from "next-auth";
import PropertiesSection from "@/app/_components/PropertiesSection";
import { getUnapprovedProperties, getUnapprovedLands } from "@/app/lib/agentProperties";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function ApprovedProperties() {
    const session = await getServerSession(authOptions);
    const houses = await getUnapprovedProperties(session.user.id);
    const lands = await getUnapprovedLands(session.user.id);
    
    return (
        <main className="flex flex-col gap-8 h-[100vh]">
            <section className="w-full h-1/2">
                <PropertiesSection title="Houses and Apartments" max={3} properties={houses} />
            </section>
            <section  className="w-full h-1/2">
                <PropertiesSection title="Land" max={3} properties={lands} />
            </section>
        </main>
    )
}