import { connectToDB } from "@/app/utils/db"
import User from "@/models/user"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function PUT(req, { params }) {
    await connectToDB();
    const updates = await req.json()
    const id = new mongoose.Types.ObjectId(params.id)

    await User.findByIdAndUpdate(id, {
        $set: { ...updates }
    })

    return NextResponse.json({ message: "User succcessfully created!" }, { status: 200 })
}

export async function GET(req, { params }) {
    await connectToDB();
    const id = new mongoose.Types.ObjectId(params.id)
    const user = await User.findById(id)

    return NextResponse.json({ user })

}

export async function DELETE({ params }) {
    await connectToDB();
    const id = new mongoose.Types.ObjectId(params.id)

    await User.findByIdAndDelete(id)

    return NextResponse.json({ message: "User successfully deleted" })
}