import Image from "next/image" 

export default function ImagePreview({ images }){
    return (
        <div>
            {
                images.map(img => {
                    const src = URL.createObjectURL(img);
                    return (
                      <div className="relative aspect-video col-span-4 w-[150px] h-[150px]" key={img.name}>
                        <Image src={src} alt={img.name} className="object-cover" fill />
                      </div>
                    );
                  })
            }
        </div>
    )
}