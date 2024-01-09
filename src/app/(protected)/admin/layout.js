import Sidebar from "@/app/_components/Sidebar"

export const metadata = {
    title: 'Nyumbani Admin Dashboard',
    description: 'You can manage your agents, verify your properties and view your analytics here',
}

export default function AdminLayout({ children }) {
    return (
        <main className="flex gap-4" style={{ height: "100vh" }}>
            <Sidebar />
            {children}
        </main>
    )
}