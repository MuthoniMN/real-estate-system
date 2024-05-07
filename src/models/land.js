import mongoose, { Schema, model, models } from "mongoose";

const LandSchema = new Schema({
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
        required: [true, 'Is this for sale or on lease?'],
        enum: { values: ['Sale', 'Lease'], message: '{VALUE} is not supported' }
    },
    price: {
        type: Number,
        required: [true, "Please include a price for your property"]
    },
    location: {
        type: String,
        required: true
    },
    dimensions: {
        type: String,
        required: true
    },
    area: {
        type: Number,
        required: true
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

const Land = models.Land || model('Land', LandSchema);
export default Land;