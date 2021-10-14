import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const songSchema = new mongoose.Schema({
    category: {
        type: ObjectId,
        ref: "Category",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    singer: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    view: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model("Song", songSchema);