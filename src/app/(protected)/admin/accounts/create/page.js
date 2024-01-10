"use client"
import Button from "@/app/_components/Button"
import { useState } from "react"

export default function CreateAdmin() {
    const [details, setDetails] = useState({
        email: "",
        username: "",
        password: ""
    })
    return (
        <section className="flex flex-col gap-8 justify-center items-center h-full">
            <h1 className="text-3xl text-theme-color text-center font-bold">Create an Admin Account</h1>
            <form className="w-[300px] mx-auto">
                <div className="my-2">
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" placeholder="e.g., m.itch" className="w-full mt-2 p-2 border-2 border-theme-color" value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} />
                </div>
                <div className="my-2">
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" placeholder="e.g., m.itch" className="w-full mt-2 p-2 border-2 border-theme-color" value={details.username} onChange={(e) => setDetails({ ...details, username: e.target.value })} />
                </div>
                <div className="my-2">
                    <label htmlFor="password">Password: </label>
                    <input type="tpassword" id="password" placeholder="e.g., Secure123!!" className="w-full mt-2 p-2 border-2 border-theme-color" value={details.password} onChange={(e) => setDetails({ ...details, password: e.target.value })} />
                </div>
                <Button type={"submit"}>Log In</Button>
            </form>
        </section>
    )
}