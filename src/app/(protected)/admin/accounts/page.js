import Button from "@/app/_components/Button";
import CardContainer from "@/app/_components/CardContainer";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import getAllAdmins from "@/app/lib/getAllAdmins";

export default async function Admins() {
    const res = getAllAdmins();
    let data = [];
    res.then(response => {
        data = response.results
    }).catch(err => {
        console.error(err);
    })

    return (
        <section className="p-4">
            <h2 className="text-3xl font-bold">Our Admins</h2>
            <Button type={"button"}>
                <Link href={"/admin/accounts/create"} className="text-white">Create a New Admin Account</Link>
            </Button>
            <section className="flex flex-wrap gap-4 my-4">
                {data && data.map(a => (
                    <CardContainer key={a._id}>
                        <h3 className="text-xl my-2">{a.username}</h3>
                        <p className="my-2">{a.email}</p>
                        <div className="flex justify-between items-center">
                            <Button type={"button"}>
                                <Link href={`/admin/accounts/update/${a._id}`} className="flex items-center justify-between w-full">
                                    Edit <FontAwesomeIcon icon={faEdit} style={{ marginLeft: "12px", height: "16px" }} />
                                </Link>
                            </Button>
                            <button className="bg-red-600 text-white font-bold py-2 px-4 hover:bg-red-300 hover:text-red-600 flex items-center">Delete <FontAwesomeIcon icon={faTrash} style={{ marginLeft: "12px", height: "16px" }} /></button>
                        </div>
                    </CardContainer>
                ))}
            </section>
        </section>
    )
}