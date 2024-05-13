import mongoose, { Schema, model, models } from "mongoose";

const RentalsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, "Please include a price for your property"]
    },
    location: {
        title: {
            type: String,
            required: true
        },
        long: {
            type: String,
            required: true
        },
        lat: {
            type: String,
            required: true
        }
    },
    beds: {
        type: Number,
        required: true
    },
    baths: {
        type: Number,
        required: true
    },
    area: {
        type: Number
    },
    agent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    pictures: [{
        imageUrl: {
            type: String,
            required: true
        }
    }],
    dueDay: {
        type: Number,
        default: 3
    }
}, { timestamps: true })

const Rentals = models.Rentals || model('Rentals', RentalsSchema)
export default Rentals