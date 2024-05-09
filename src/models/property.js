import mongoose, { Schema, model, models } from "mongoose";

const PropertySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: [true, 'Is this for sale or a rental?'],
        enum: { values: ['Sale', 'Rent'], message: '{VALUE} is not supported' }
    },
    price: {
        type: Number,
        required: [true, "Please include a price for your property"]
    },
    location: {
        type: String,
        required: true
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
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    pictures: [{
        imageUrl: {
            type: String,
            required: true
        }
    }],
    approved: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

const Property = models.Property || model('Property', PropertySchema)
export default Property