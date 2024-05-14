export const uploadImages = async (fileList, property) => {
    let index = 0;
    let images = []

    while (index < fileList.length){
        const formdata = new FormData();
        const public_id = `${property.replace(' ', '_')}-${index}`

        formdata.append("file", URL.createObjectURL(fileList.item(index))) 
        formdata.append("public_id", public_id)
        formdata.append("eager", "w_400,h_400,c_fit" )
        formData.append("upload_preset", "property_pictures");

        const requestOptions = {
            method: "POST",
            body: formdata
          };
          
          try{
            const results = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}}/image/upload`, requestOptions)
            const data = await results.json()

            images.push({
                imageUrl: data.eager[0].secure_url
            })
          }catch(err){
            console.error(err)
            return {
                status: 'error',
                message: "Failed to upload images"
            }
          }

        index++;
    }

    return images;
}