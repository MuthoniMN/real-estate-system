import { getServerSession } from "next-auth";
import PropertiesSection from "@/app/_components/PropertiesSection";
import { getUnapprovedProperties, getUnapprovedLands } from "@/app/lib/agentProperties";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function ApprovedProperties() {
    const session = await getServerSession(authOptions);
    const houses = await getUnapprovedProperties(session.user.id);
    const lands = await getUnapprovedLands(session.user.id);
    
    return (
        <main className="flex felx-col gap-8">
            <PropertiesSection title="Houses and Apartments" max={3} properties={houses} />
            <PropertiesSection title="Land" max={3} properties={lands} />
        </main>
    )
}