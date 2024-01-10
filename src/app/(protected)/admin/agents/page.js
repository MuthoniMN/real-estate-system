import Link from "next/link";
import Button from "@/app/_components/Button";
import CardContainer from "@/app/_components/CardContainer";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getAllAgents from "@/app/lib/getAllAgents";

export default async function Agents() {
    const res = await getAllAgents()

    return (
        <section className="p-4">
            <h2 className="text-3xl font-bold">Our Agents</h2>
            <Button type={"button"}>
                <Link href={"/admin/agents/create"} className="text-white">Create a New Agent Account</Link>
            </Button>
            <section className="flex flex-wrap gap-4 my-4">
                {res && res.results.map(a => (
                    <CardContainer key={a._id}>
                        <h3 className="text-xl my-2">{a.username}</h3>
                        <p className="my-2">{a.email}</p>
                        <p className="my-2">Managing 0 rental properties</p>
                        <p className="my-2">Sold: 0 properties</p>
                        <div className="flex justify-between items-center">
                            <Button type={"button"}>Edit <FontAwesomeIcon icon={faEdit} style={{ marginLeft: "12px", height: "16px" }} /></Button>
                            <button className="bg-red-600 text-white font-bold py-2 px-4 hover:bg-red-300 hover:text-red-600 flex items-center">Delete <FontAwesomeIcon icon={faTrash} style={{ marginLeft: "12px", height: "16px" }} /></button>
                        </div>
                    </CardContainer>
                ))}
            </section>
        </section>
    )
}