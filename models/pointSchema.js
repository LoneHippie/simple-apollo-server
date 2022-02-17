import { Schema } from 'mongoose';

const pointSchema = new Schema({
    type: {
        type: String,
        required: true,
        enum: ['Point']
    },
    coordinates: {
        type: [Number],
        required: true
    }
});

export default pointSchema;