import { connectToDB } from "@/app/utils/db"
import User from "@/models/user"
import { NextResponse } from "next/server"

export async function POST(req, res) {
    await connectToDB()
    try {
        const user = await req.json()
        console.log(user)

        await User.create(user)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.error(err)
                return NextResponse.json(
                    { message: err.message },
                    { status: 500 }
                )
            })

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