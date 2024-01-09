import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link href={"/"}>
            <div className="flex items-center gap-2">
                <Image src="/Nyumbani-Real-Estate.png" alt="Nyumbani Real Estate" width={56} height={56} className="rounded" />
                <span className="font-bold">Nyumbani<br />Real Estate</span>
            </div>
        </Link>
    )
}