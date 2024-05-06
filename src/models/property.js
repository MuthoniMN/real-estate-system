import mongoose, { Schema, model } from "mongoose";

const PropertySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
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
        required: true
    },
    pictures: [{
        imageUrl: {
            type: String,
            required: true
        }
    }]
}, { timestamps: true })

const Property = model('Property', PropertySchema)
module.exports = Property