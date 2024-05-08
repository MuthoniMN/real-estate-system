import Property from "@/models/property";
import { connectToDB } from "@/app/utils/db";
import { NextResponse } from "next/server";
import User from "@/models/user";
import mongoose from "mongoose";

export const POST = async (req, res) => {
    await connectToDB();
    const property = await req.json()
    console.log(property)

    try {
        const id = new mongoose.Types.ObjectId(property.agent)
        const user = await User.findById(id)
        if (!user) {
            return NextResponse.json({
                message: "Invalid agent account!"
            }, { status: 404 })
        }
        await Property.create({ ...property, agent: id })

        return NextResponse.json({
            message: "Property successfully created!"
        }, { status: 201 })

    } catch (error) {
        console.error(error);
        return NextResponse.json({
            message: "Property was not created!"
        }, { status: 500 })
    }
}