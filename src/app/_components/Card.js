import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import CardContainer from "./CardContainer"

export default function Card({ img, title, desc, link, btnText }) {
    return (
        <CardContainer>
            <Image src={img} alt={title} width={120} height={120} className="mx-auto" />
            <h3 className="text-xl font-bold text-theme-color text-center my-2">{title}</h3>
            <p>{desc}</p>
            <Button>
                <Link href={link}>{btnText}</Link>
            </Button>
        </CardContainer>
    )
}