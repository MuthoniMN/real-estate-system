import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@/app/utils/db";
import User from "@/models/user";
import Credentials from "next-auth/providers/credentials";

const handler = await NextAuth({
    providers: [
        GoogleProvider({
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            clientId: process.env.GOOGLE_CLIENT_ID,
        }),
        Credentials({
            name: "credentials",
            credentials: {
                username: { label: "Username", placeholder: "Your Username" },
                password: { label: "Password", placeholder: "Your Password", type: "password" }
            },
            async authorize(user) {
                try {
                    await connectToDB()
                    const data = await User.findOne({ username: user.username });
                    if (!data || user.password !== data.password) { return null; }

                    return data
                } catch (error) {
                    console.error(error)
                }
            }
        })
    ],
    pages: {
        signIn: "/signin"
    },
    session: {
        strategy: "jwt"
    }

})

export { handler as GET, handler as POST }