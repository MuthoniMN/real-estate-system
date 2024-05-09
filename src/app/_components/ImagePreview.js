import Image from "next/image" 

export default function ImagePreview({ images }){
  console.log("loaded");
    return (
        <div className="grid grid-cols-12 gap-2 my-2" >
            {
                images.map(img => {
                    const src = URL.createObjectURL(img)
                    return (
                      <div className="col-span-4" key={img.name}>
                        <Image src={src} alt={img.name} className="rounded-lg" width={150} height={150} />
                      </div>
                    );
                  })
            }
        </div>
    )
}