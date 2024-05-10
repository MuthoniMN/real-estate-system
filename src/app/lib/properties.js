import { connectToDB } from "../utils/db";
import Land from "@/models/land";
import Property from "@/models/property"

export const getProperty = async ( id ) => {
    try{
        await connectToDB();
        let property = await Land.find({_id: id })

        if(!property){
            property = await Property.find({ _id: id })

            return {
                type: "land",
                ...property
            }
        }

        return {
            type: "land",
            ...property
        }
    }catch(error){
        console.error(error);
    }
}

export const getApprovedProperties = async () => {
    try {
        await connectToDB();

        const houses = await Property.find({ approved: true })

        return houses;
    } catch (err) {
        console.error(err)
    }
}

export const getApprovedLands = async () => {
    try {
        await connectToDB();

        const lands = await Land.find({ approved: true })

        return lands;
    } catch (err) {
        console.error(err)
    }
}

export const getUnapprovedProperties = async () => {
    try {
        await connectToDB();

        const houses = await Property.find({ approved: false })

        return houses;
    } catch (err) {
        console.error(err)
    }
}

export const getUnapprovedLands = async () => {
    try {
        await connectToDB();

        const lands = await Land.find({ approved: false })

        return lands;
    } catch (err) {
        console.error(err)
    }
}

export const getRentals = async () => {
    try {
        await connectToDB();

        const properties = await Rentals.find().populate('agent')

        return properties;
    }catch(err){
        console.error(err);
    }
}