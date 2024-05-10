import { getRentals } from "@/app/lib/properties"

export default async function RentalProperties() {
    const properties = await getRentals();
    return (
        <main className="flex felx-col gap-8">
            <PropertiesSection title="Rental Properties" max={6} properties={properties} />
        </main>
    )
}