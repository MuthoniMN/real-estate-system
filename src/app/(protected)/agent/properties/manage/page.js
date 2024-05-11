import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import PropertiesSection from "@/app/_components/PropertiesSection";
import { getRentals } from "@/app/lib/agentProperties";

export default async function RentalProperties() {
    const session = await getServerSession(authOptions);
    const rentals = await getRentals(session.user.id);
    return (
        <main className="ps-8  h-[100vh]">
            <PropertiesSection title="Rental Properties" max={6} properties={rentals} />
        </main>
    )
}