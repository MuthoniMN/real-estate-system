import { getServerSession } from "next-auth";
import PropertiesSection from "@/app/_components/PropertiesSection";
import { getApprovedProperties, getApprovedLands } from "@/app/lib/agentProperties";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function ApprovedProperties() {
    const session = await getServerSession(authOptions);
    const houses = await getApprovedProperties(session.user.id);
    const lands = await getApprovedLands(session.user.id);
    
    return (
        <main className="flex flex-col gap-2  ps-8 h-[100vh]">
            <section className="w-full h-1/2">
                <PropertiesSection title="Houses and Apartments" max={3} properties={houses} />
            </section>
            <section  className="w-full h-1/2">
                <PropertiesSection title="Land" max={3} properties={lands} />
            </section>
        </main>
    )
}