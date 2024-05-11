import PropertiesSection from "@/app/_components/PropertiesSection";
import { getUnapprovedProperties, getUnapprovedLands } from "@/app/lib/properties";

export default async function ApprovedProperties() {
    const houses = await getUnapprovedProperties();
    const lands = await getUnapprovedLands();
    
    return (
        <main className="flex flex-col gap-8">
            <PropertiesSection title="Houses and Apartments" max={3} properties={houses} />
            <PropertiesSection title="Land" max={3} properties={lands} />
        </main>
    )
}