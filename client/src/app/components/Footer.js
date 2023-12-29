export default function Footer() {
    const today = new Date();
    const currentYear = today.getFullYear();
    return (
        <footer className="text-center py-4">
            <p>Developed by <a href="https://github.com/MuthoniMN" className="text-theme-color hover:underline hover:font-bold">Michelle Ndiangui</a></p>
            <p><a href="https://www.figma.com/community/file/1316765990281362046" className="text-theme-color hover:underline hover:font-bold">Figma Design</a></p>
            <p>Copyright &copy; {currentYear}</p>
        </footer>
    )
}