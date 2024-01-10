import CardContainer from "@/app/_components/CardContainer";

async function getAllAgents() {
    const data = await fetch("http://localhost:3000/api/accounts/all?role=agent")

    if (!data.ok) {
        throw new Error('Failed to fetch data')
    }

    return data.json()
}

export default async function Agents() {
    const res = await getAllAgents()
    console.log(res)

    return (
        <section className="p-4">
            <h2 className="text-3xl font-bold">Our Agents</h2>
            <section className="flex flex-wrap gap-4 my-4">
                {res && res.results.map(a => (
                    <CardContainer key={a._id}>
                        <h3 className="text-xl my-2">{a.username}</h3>
                        <p className="my-2">{a.email}</p>
                        <p className="my-2">Managing 0 rental properties</p>
                        <p className="my-2">Sold: 0 properties</p>
                    </CardContainer>
                ))}
            </section>
        </section>
    )
}