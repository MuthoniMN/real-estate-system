import mongoose, { Schema, models, model } from "mongoose";

const NotificationsSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    propertyListingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property'
    },
    landListingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Land'
    },
    details: {
        type: String,
        required: true
    },
    viewed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const Notifications = models.Notifications || model("Notifications", NotificationsSchema)
export default Notifications