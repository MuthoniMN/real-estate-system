"use client"
import Button from "@/app/_components/Button";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signin() {
    const [details, setDetails] = useState({
        username: "",
        password: ""
    })
    const [err, setErr] = useState("")
    const [success, setSuccess] = useState("")
    const router = useRouter()
    const { data: session } = useSession();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            let res = await signIn("credentials", { ...details, redirect: false })
            if (res.error) {
                setErr("Invalid Credentials")
                setSuccess("")
                return;
            } else {
                setErr("")
                setSuccess("Successfully logged in")

                if (session.user.role === 'admin') {
                    router.replace("/admin")
                } else if (session.user.role === 'agent') {
                    router.replace("/agent")
                } else if (session.user.role === 'client') {
                    router.replace("/client")
                }
            }
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <section className="p-6">
            <h1 className="text-3xl text-theme-color text-center font-bold">Sign In</h1>
            <form className="md:w-1/3 mx-auto" onSubmit={(e) => handleSubmit(e)}>
                {err && (<p className="bg-red-100 text-red-600 font-bold p-2 rounded w-full"><FontAwesomeIcon icon={faExclamationTriangle} style={{ marginRight: "12px" }} />{err}</p>)}
                {success && (<p className="bg-emerald-100 text-emerald-600 font-bold p-2 rounded w-full"><FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: "12px" }} />{success}</p>)}
                <div className="my-2">
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" placeholder="e.g., m.itch" className="w-full mt-2 p-2 border-2 border-theme-color" value={details.username} onChange={(e) => setDetails({ ...details, username: e.target.value })} />
                </div>
                <div className="my-2">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" placeholder="e.g., Secure123!!" className="w-full mt-2 p-2 border-2 border-theme-color" value={details.password} onChange={(e) => setDetails({ ...details, password: e.target.value })} />
                </div>
                <Button type={"submit"}>Log In</Button>
            </form>
            <p className="italic text-center">Are you a property owner? Create an account using your Google Account</p>
            <Button type={"submit"}>
                <div onClick={() => signIn("google")} className="flex items-center">
                    <FontAwesomeIcon icon={faGoogle} className="me-4" style={{ fontSize: "12px", height: "16px", display: "inline" }} />
                    <p>Continue with Google</p>
                </div>
            </Button>

        </section >
    )
}