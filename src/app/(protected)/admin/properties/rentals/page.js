import { getRentals } from "@/app/lib/properties";
import PropertiesSection from "@/app/_components/PropertiesSection";

export default async function RentalProperties() {
    const properties = await getRentals();
    return (
        <main className="flex flex-col gap-8 h-[100vh]">
            <PropertiesSection title="Rental Properties" max={6} properties={properties} />
        </main>
    )
}