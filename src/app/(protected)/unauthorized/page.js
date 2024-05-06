import Navbar from "@/app/_components/Navbar"
import Link from "next/link"
import Button from "@/app/_components/Button"

export default function Unauthorized() {
    return (
        <>
            <Navbar />
            <h1 className="text-3xl font-bold text-center my-8">Unauthorized Access</h1>
            <p className="text-center my-4">You are not authorized to view this page.</p>
            <Link href={'/'}>
                <Button>
                    Back to Home
                </Button>
            </Link>
        </>
    )
}