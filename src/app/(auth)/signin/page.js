"use client"
import Button from "@/app/_components/Button";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Signin() {
    const [details, setDetails] = useState({
        username: "",
        password: ""
    })
    return (
        <section className="p-6">
            <h1 className="text-3xl text-theme-color text-center font-bold">Sign In</h1>
            <form className="md:w-1/3 mx-auto">
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
            <Button type={"submit"}>
                <FontAwesomeIcon icon={faGoogle} className="me-4" style={{ fontSize: "12px", height: "16px", display: "inline" }} />
                <p>Continue with Google</p>
            </Button>
        </section>
    )
}