export default function Button({ children, type, func }) {
    return (
        <button className="bg-theme-color hover:bg-theme-color/85 py-2 px-4 flex justify-center items-center mx-auto my-6 transition-all hover:rounded-2xl" type={type} onClick={func} >{children}</button>
    )
}