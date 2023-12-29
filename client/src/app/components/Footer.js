export default function Footer() {
    const today = new Date();
    const currentYear = today.getFullYear();
    return (
        <footer>
            <p>Developed by <a href="https://github.com/MuthoniMN">Michelle Ndiangui</a></p>
            <p><a href="https://www.figma.com/community/file/1316765990281362046">Figma Design</a></p>
            <p>Copyright &copy; {currentYear}</p>
        </footer>
    )
}