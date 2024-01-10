import Button from "@/app/_components/Button";
import CardContainer from "@/app/_components/CardContainer";
import Link from "next/link";

async function getAllAdmins() {
    const data = await fetch("http://localhost:3000/api/accounts?role=admin")

    if (!data.ok) {
        throw new Error('Failed to fetch data')
    }

    return data.json()
}

export default async function Admins() {
    const res = await getAllAdmins()

    return (
        <section className="p-4">
            <h2 className="text-3xl font-bold">Our Admins</h2>
            <Button type={"button"}>
                <Link href={"/admin/accounts/create"} className="text-white">Create a New Admin Account</Link>
            </Button>
            <section className="flex flex-wrap gap-4 my-4">
                {res && res.results.map(a => (
                    <CardContainer key={a._id}>
                        <h3 className="text-xl my-2">{a.username}</h3>
                        <p className="my-2">{a.email}</p>
                    </CardContainer>
                ))}
            </section>
        </section>
    )
}