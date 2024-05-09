import Land from "@/models/land";

export default async function createListing(land){
    try {
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