import { connectToDB } from "@/app/utils/db"
import User from "@/models/user"
import { NextResponse } from "next/server"

export async function POST(req, res) {
    await connectToDB()
    try {
        const user = await req.json()

        await User.create(user)

        return NextResponse.json(
            { message: "User Created!" },
            { status: 201 }
        )
    } catch (err) {
        console.error(err)
        return NextResponse.json(
            { message: "User Not Created!" },
            { status: 500 }
        )
    }

}