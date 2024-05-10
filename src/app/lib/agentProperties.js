import { connectToDB } from "../utils/db";
import Land from "@/models/land";
import Property from "@/models/property";
import Rentals from "@/models/rentals";

export const getApprovedProperties = async (id) => {
    try {
        await connectToDB();

        const houses = await Property.find({ agent: id, approved: true })

        return houses;
    } catch (err) {
        console.error(err)
    }
}

export const getApprovedLands = async (id) => {
    try {
        await connectToDB();

        const lands = await Land.find({ agent: id, approved: true })

        return lands;
    } catch (err) {
        console.error(err)
    }
}

export const getUnapprovedProperties = async (id) => {
    try {
        await connectToDB();

        const houses = await Property.find({ agent: id, approved: false })

        return houses;
    } catch (err) {
        console.error(err)
    }
}

export const getUnapprovedLands = async (id) => {
    try {
        await connectToDB();

        const lands = await Land.find({ agent: id, approved: false })

        return lands;
    } catch (err) {
        console.error(err)
    }
}

export const getRentals = async (id) => {
    try {
        await connectToDB();

        const properties = await Rentals.find({ agent: id })

        return properties;
    }catch(err){
        console.error(err);
    }
}