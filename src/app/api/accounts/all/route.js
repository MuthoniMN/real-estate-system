import { connectToDB } from "@/app/utils/db";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    await connectToDB();
    const searchParams = req.nextUrl.searchParams
    const role = searchParams.get('role')
    let data = []
    try {
        if (role) {
            data = await User.find({ role: role });
        } else {
            data = await User.find();
        }
        return NextResponse.json({ total: data.length, results: data })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: "Failed to fetch agents" })
    }

}