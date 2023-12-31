import Property from "./Property"

export default function PropertySection() {
    return (
        <section className="p-4">
            <h2 className="text-3xl font-bold ml-8 my-4">List of Properties</h2>
            <section className="flex justify-center gap-6 flex-wrap md:flex-nowrap">
                <Property title="A 1 bedroom in Nairobi" beds={1} baths={2} location={"Nairobi"} img={""} id={1} price={"Ksh 20,000"} />
            </section>
        </section>
    )
}