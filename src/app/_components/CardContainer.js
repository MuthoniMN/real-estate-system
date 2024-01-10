export default function CardContainer({ children }) {
    return (
        <div className="p-4 shadow-sm hover:shadow-lg md:w-[250px]">
            {children}
        </div>
    )
}