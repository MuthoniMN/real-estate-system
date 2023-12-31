export default function Signin() {
    return (
        <section className="p-6">
            <h1 className="text-3xl text-theme-color text-center font-bold">Sign In</h1>
            <form className="md:w-1/3 mx-auto">
                <div className="my-2">
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" placeholder="e.g., m.itch" className="w-full mt-2 p-2 border-2 border-theme-color" />
                </div>
                <div className="my-2">
                    <label htmlFor="password">Password: </label>
                    <input type="tpassword" id="password" placeholder="e.g., Secure123!!" className="w-full mt-2 p-2 border-2 border-theme-color" />
                </div>
                <input type="submit" value={"Log In"} className="bg-theme-color py-2 px-4 block mx-auto my-6 transition-all hover:rounded-2xl" />
            </form>
        </section>
    )
}