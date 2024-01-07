import mongoose from "mongoose";

let isConnected = false;

const uri = process.env.MONGODB_URI

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log(`Connected at: ${mongoose.connection}`)
        return;
    }

    try {
        await mongoose.connect(uri, {
            dbName: "nyumbani_system"
        })
        isConnected = true;
        console.log(`Connected at: ${mongoose.connection}`)
    } catch (err) {
        console.error(err)
    }
}