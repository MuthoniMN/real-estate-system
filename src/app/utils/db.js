import mongoose from "mongoose";

let isConnected = false;

const uri = process.env.MONGODB_URI

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log(`Connected`)
        return;
    }

    try {
        await mongoose.connect(uri, {
            dbName: "nyumbani_system"
        })
        isConnected = true;
        console.log(`Connected`)
    } catch (err) {
        console.error(err)
    }
}