"use client"
import Button from "@/app/_components/Button"
import { faCheckCircle, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getUserByID } from "@/app/lib/getUser"
import { updateUser } from "@/app/lib/updateUser"
import { useEffect, useState } from "react"

export default function UpdateAdmin({ params }) {
    const [details, setDetails] = useState({
        email: "",
        username: "",
        password: ""
    })
    useEffect(() => {
        getUserByID(params.id)
            .then(data => {
                console.log(data)
                const currentAccount = data
                setDetails({
                    email: currentAccount.user.email,
                    username: currentAccount.user.username,
                    password: currentAccount.user.password,
                })
            })
    }, [])

    const [err, setErr] = useState("")
    const [success, setSuccess] = useState("")


    async function handleSubmit(e) {
        e.preventDefault();

        try {
            let response = await updateUser(params.id, details)

            if (response.status === 200) {
                setErr("")
                setSuccess("Admin Account Updated!")
                return response;
            } else if (response.status === 500) {
                setSuccess("")
                setErr("Oops! Admin Account Not Updated!")
                return response;
            }
        } catch (error) {
            console.error(error)
        }

    }
    return (
        <section className="flex flex-col gap-8 justify-center items-center h-full">
            <h1 className="text-3xl text-theme-color text-center font-bold">Update an Admin Account</h1>
            <form className="w-full min-w-[200px] md:w-[300px] mx-auto" onSubmit={e => handleSubmit(e)}>
                {err && (<p className="bg-red-100 text-red-600 font-bold p-2 rounded w-full"><FontAwesomeIcon icon={faExclamationTriangle} style={{ marginRight: "12px" }} />{err}</p>)}
                {success && (<p className="bg-emerald-100 text-emerald-600 font-bold p-2 rounded w-full"><FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: "12px" }} />{success}</p>)}
                <div className="my-2">
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" placeholder="e.g., michelle@gmail.com" className="w-full mt-2 p-2 border-2 border-theme-color" value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} />
                </div>
                <div className="my-2">
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" placeholder="e.g., m.itch" className="w-full mt-2 p-2 border-2 border-theme-color" value={details.username} onChange={(e) => setDetails({ ...details, username: e.target.value })} />
                </div>
                <div className="my-2">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" placeholder="e.g., Secure123!!" className="w-full mt-2 p-2 border-2 border-theme-color" value={details.password} onChange={(e) => setDetails({ ...details, password: e.target.value })} />
                </div>
                <Button type={"submit"}>Update Account</Button>
            </form>
        </section>
    )
}