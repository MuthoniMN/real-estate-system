import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import PropertiesSection from "@/app/_components/PropertiesSection";
import { getRentals } from "@/app/lib/agentProperties";

export default function RentalProperties() {
    const session = await getServerSession(authOptions);
    const rentals = await getRentals(session.user.id);
    return (
        <main className="flex felx-col gap-8">
            <PropertiesSection title="Rental Properties" max={6} properties={rentals} />
        </main>
    )
}