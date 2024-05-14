const crypto = require('crypto')

const generateSignature = (public_id, timestamp, transform) => {
    const string = `eager=${transform}&public_id=${public_id}&timestamp=${timestamp}${process.env.CLOUDINARY_API_SECRET}`

    const signature = crypto
                                    .createHash('sha1')
                                    .update(string)
                                    .digest('hex')

    return signature
}

export const uploadImages = async (fileList, property) => {
    let index = 0;
    let images = []

    while (index < fileList.length){
        const formdata = new FormData();
        const timestamp = Date.now();
        const public_id = `${property.replace(' ', '_')}-${index}`
        const sign = generateSignature(public_id, timestamp, "w_400,h_400,c_fit")

        formdata.append("file", URL.createObjectURL(fileList.item(index))) 
        formdata.append("public_id", public_id)
        formdata.append("signature", sign)
        formdata.append("eager", "w_400,h_400,c_fit" )
        formdata.append("api_key", process.env.CLOUDINARY_API_KEY)
        formdata.append("timestamp", timestamp)

        const requestOptions = {
            method: "POST",
            body: formdata,
            redirect: "follow"
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