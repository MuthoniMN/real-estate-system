"use server"
import Land from "@/models/land";
import { connectToDB } from "../utils/db";

export default async function createListing(land){
    try {
        await connectToDB();
        await Land.create(land)
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