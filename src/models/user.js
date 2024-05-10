import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    profilePicture: {
        type: String
    }
})

const User = models.User || model("User", UserSchema)
export default User;