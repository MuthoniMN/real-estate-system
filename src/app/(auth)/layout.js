import Link from "next/link";
import Button from "../_components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function AuthLayout({ children }) {
    return (
        <>
            <Button>
                <Link href={"/"} className="flex items-center justify-center"><FontAwesomeIcon icon={faArrowLeft} style={{ height: "16px", marginRight: "12px" }} />Back to Home </Link>
            </Button>
            {children}
        </>
    )
}