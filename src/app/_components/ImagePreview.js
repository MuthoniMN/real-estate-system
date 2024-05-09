import Image from "next/image" 

export default function ImagePreview({ images }){
  console.log("loaded");
    return (
        <div className="flex gap-4 my-2" >
            {
                images.map(img => {
                    const src = URL.createObjectURL(img)
                    return (
                      <div key={img.name}>
                        <Image src={src} alt={img.name} className="rounded-lg" width={150} height={150} />
                      </div>
                    );
                  })
            }
        </div>
    )
}