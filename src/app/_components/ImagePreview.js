import Image from "next/image" 

export default function ImagePreview({ images }){
    return (
        <div className="grid grid-cols-12 gap-2 my-2" >
            {
                images.map(img => {
                    return (
                      <div className="relative aspect-video col-span-4" key={img.name}>
                        <Image src={img.src} alt={img.name} className="rounded-lg" width="150" height="150" />
                      </div>
                    );
                  })
            }
        </div>
    )
}