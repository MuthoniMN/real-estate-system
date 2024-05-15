"use server"
import Property from "@/models/property";
import { connectToDB } from "../utils/db";
import { propertySchema } from '@/app/_schemas/property'
import { uploadImages } from "./imageUpload";

export default async function createListing(agent, location, property){
    const propertyObj = Object.fromEntries(property)

    //validate fields
    const validatedFields = propertySchema.safeParse(propertyObj)
     
      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.issues,
        }
      }
    
      // upload images
      const images = await uploadImages(property.pictures)
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
        await Property.create({ ...propertyObj, agent: agent, location: location, pictures: images  })
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