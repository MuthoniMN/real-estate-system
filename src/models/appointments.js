import mongoose, { Schema, models, model } from "mongoose";

const AppointmentsSchema = new Schema({
    agent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    client: {
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
    date: {
        type: Date,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const Appointments = models.Appointments || model("Appointments", AppointmentsSchema)
export default Appointments