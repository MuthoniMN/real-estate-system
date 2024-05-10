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
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr06FC39omwueuJhcRzJr6bR1FefGRu1GGFQ&s"
    }
})

const User = models.User || model("User", UserSchema)
export default User;