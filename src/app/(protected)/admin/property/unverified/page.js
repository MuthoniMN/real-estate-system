import PropertiesSection from "@/app/_components/PropertiesSection";
import { getUnapprovedProperties, getUnapprovedLands } from "@/app/lib/properties";

export default function UnverifiedProperties() {
    const houses = await getUnapprovedProperties();
    const lands = await getUnapprovedLands();
    return (
        <main className="flex felx-col gap-8">
            <PropertiesSection title="Houses and Apartments" max={3} />
            <PropertiesSection title="Land" max={3} />
        </main>
    )
}