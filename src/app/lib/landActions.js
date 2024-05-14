"use server"
import Land from "@/models/land";
import { connectToDB } from "../utils/db";
import { landSchema } from '@/app/_schemas/property'
import { uploadImages } from "./imageUpload";

export default async function createListing(agent, location, land){
    const landObj = Object.fromEntries(land)

    //validate fields
    const validatedFields = landSchema.safeParse(landObj)
     
      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.issues,
        }
      }
    
      // upload images
      const images = await uploadImages(land.pictures)
      if(images.status === "error"){
        return {
          errors: {
            path: ["pictures"],
            message: images.error
          }
        }
      }

    try {
        await connectToDB();
        await Land.create({ ...landObj, agent: agent, location: location, pictures: images  })
        return {
            status: "success", 
            message: "Listing was successfully created!"
        }
    } catch (error) {
        console.error(error);
        return {
            status: "error", 
            message: "Listing was not created! Please try again"
        }
    }
}