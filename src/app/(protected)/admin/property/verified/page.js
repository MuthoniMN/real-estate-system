import PropertiesSection from "@/app/_components/PropertiesSection";
import { getApprovedProperties, getApprovedLands } from "@/app/lib/properties";

export default function VerifiedProperties() {
    const houses = await getApprovedProperties();
    const lands = await getApprovedLands();
    return (
        <main className="flex felx-col gap-8">
            <PropertiesSection title="Houses and Apartments" max={3} />
            <PropertiesSection title="Land" max={3} />
        </main>
    )
}