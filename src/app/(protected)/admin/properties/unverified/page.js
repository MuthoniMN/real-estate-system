import PropertiesSection from "@/app/_components/PropertiesSection";
import { getUnapprovedProperties, getUnapprovedLands } from "@/app/lib/properties";

export default async function ApprovedProperties() {
    const houses = await getUnapprovedProperties();
    const lands = await getUnapprovedLands();
    
    return (
        <main className="flex flex-col gap-2 ps-8 h-[100vh]">
            <section className="w-full h-1/2">
                <PropertiesSection title="Houses and Apartments" max={3} properties={houses} />
            </section>
            <section  className="w-full h-1/2">
                <PropertiesSection title="Land" max={3} properties={lands} />
            </section>
        </main>
    )
}