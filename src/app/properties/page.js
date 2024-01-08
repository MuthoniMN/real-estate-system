import SearchBar from "../_components/SearchBar";

export default function Properties() {
    return (
        <main>
            <section style={{ background: "url(https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=1500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b24lMjBzYWxlJTIwcHJvcGVydHl8ZW58MHx8MHx8fDA%3D)" }} className='bg-fixed bg-no-repeat bg-cover bg-top flex flex-col items-center justify-center sm:h-[50vh] h-[80vh]'>
                <h2 className="text-3xl font-bold">All Properties</h2>
                <p>Find a property that is on sale or available for rent.</p>
            </section>
            <SearchBar />
        </main>
    )
}