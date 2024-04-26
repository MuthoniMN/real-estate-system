import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@/app/utils/db";
import User from "@/models/user";
import Credentials from "next-auth/providers/credentials";
import getUser from "@/app/lib/getUser";

const handler = await NextAuth({
    providers: [
        GoogleProvider({
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            clientId: process.env.GOOGLE_CLIENT_ID,

            async profile(profile) {
                await connectToDB();

                const details = {
                    id: profile.sub,
                    email: profile.email,
                    username: profile.given_name.toLowerCase() + '_' + profile.family_name.toLowerCase(),
                    role: "client"
                }

                let user = getUser(details.email)
                if (!user) User.create(details)

                return details
            }
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
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.role = user.role
            }

            return token
        },
        session: async ({ session, token }) => {
            session.user.role = token.role
            return session
        }

    },
    pages: {
        signIn: "/signin"
    }

})

export { handler as GET, handler as POST }