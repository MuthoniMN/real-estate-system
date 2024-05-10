"use client"
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function ImageCarousel({ images, small=false, desc }){
    const [current, setCurrent] = useState(0)

    const previousImage = () => {
        if(current === 0) setCurrent(images.length - 1);
        else setCurrent(current - 1);
    }

    const nextImage = () => {
        if(current === images.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    }

    return (
        <div className={`${small ? 'w-[200px]' : 'w-full'} relative`}>
            <div className={`flex justify-center items-center gap-4 w-full h-full overflow-hidden transition ease-in-out duration-400`} style={{
                transition: `translateX(-${current * 100}%)`
            }} >
                {images.map(img => (
                    <Image src={img.imageUrl} alt={desc} width={200} height={200} />
                ))}
            </div>
            <div className="absolute top-0 flex justify-between items-center w-full h-full text-lg text-white">
                <button className="w-[30px] h-[30px] flex justify-center items-center rounded-full" onClick={() => previousImage()} >
                    <FontAwesomeIcon icon={faCircleChevronLeft} />
                </button>
                <button className="w-[30px] h-[30px] flex justify-center items-center rounded-full" onClick={() => nextImage()}>
                    <FontAwesomeIcon icon={faCircleChevronRight}  />
                </button>
            </div>
        </div>
    )
}