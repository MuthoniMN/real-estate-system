"use client"
import AddHouseForm from "@/app/_components/AddHouseForm";
import AddLandForm from "@/app/_components/AddLandForm";
import Location from "@/app/_components/Location";
import Button from "@/app/_components/Button";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import getUser from "@/app/lib/getUser";

const AddProperty = () => {
    const [tab, setTab] = useState(0);
    const [type, setType] = useState("");
    const [property, setProperty] = useState({});
    const [land, setLand] = useState({});
    const { data: session } = useSession();

    useEffect(() => {
        const getUserDetails = async () => {
            const user = await getUser(session.user.email);

            if (type === "House") {
                setProperty({ ...property, agent: user.results[0]._id })
            } else if (type === "Land") {
                setLand({ ...land, agent: user.results[0]._id })
            }
        }
        getUserDetails()
    }, [type])

    return (
        <main className="flex justify-center items-center h-[100vh] scroll">
            {tab === 0 && <section className="border-2 px-8 pt-6 pb-4 w-[50%] text-center">
                <h2 className="text-2xl my-4 font-semibold">Add a New Property</h2>
                <div>
                    <select onChange={(e) => setType(e.target.value)} className="w-[100%] py-2 px-4">
                        <option>Choose a Property Type</option>
                        <option value="Land">Land</option>
                        <option value="House">House / Apartment</option>
                    </select>
                </div>
                <Button func={() => setTab(1)} disabled={type === ""} >Next</Button>
            </section>}
            {tab === 1 && <section className="border-2 rounded-3xl px-8 pt-6 pb-4 w-[90%] text-center">
                <h2 className="text-2xl my-4 font-semibold">Add a New Property: {type}</h2>
                <Location property={type === "House" ? property : land} setProperty={type === "House" ? setProperty : setLand} />
                <div className="flex justify-between w-[100%]">
                    <Button func={() => setTab(0)}>Back</Button>
                    <Button func={() => setTab(2)} disabled={type === "House" ? !property.location : !land.location} >Next</Button>
                </div>
            </section>}
            {tab === 2 && type === "House" && <AddHouseForm property={property} setProperty={setProperty} />}
            {tab === 2 && type === "Land" && <AddLandForm land={land} setLand={setLand} />}

        </main>
    )
}

export default AddProperty