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
    dimensions: {
        type: String,
        required: true
    },
    area: {
        type: Number,
        required: true
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
    approved: {
        type: Boolean,
        default: false
    },
    published: {
        type: Boolean,
        default: false
    },
    fulfilled: {
        type: Boolean,
        default: false
    },
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

const Land = models.Land || model('Land', LandSchema);
export default Land;