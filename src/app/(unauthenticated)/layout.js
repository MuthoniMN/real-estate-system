import Navbar from "@/app/_components/Navbar"

export default function UnauthenticatedLayout({ children }) {
    return (
        <main className="scroll">
            <Navbar />
            {children}
        </main>
    )
}