import { Schema, model } from 'mongoose';
import pointSchema from './pointSchema';

const hikeSchema = new Schema({
    name: {
        type: String,
        unique: [true, 'Hike must be unique name'],
        required: [true, 'Hike needs a name'],
        trim: true,
        minlength: [2, 'Hike must have a least 2 characters'],
        maxlength: [60, 'Hike name too long']
    },
    length: {
        type: Number,
        required: [true, 'Hike needs a length']
    },
    type: {
        type: String,
        enum: {
            values: ['loop', 'out and back'],
            message: 'Available trail types: loop, out and back'
        },
        required: [true, 'Hike must have a trail type']
    },
    description: {
        type: String,
        trim: true,
        minLength: [40, 'Please make description more descriptive'],
        maxlength: 1400
    },
    country: {
        type: String,
        trim: true,
        required: [true, 'Hike must define a country']
    },
    state: {
        type: String,
        trim: true
    },
    startLocation: { // type: 'Point', coordinates: [number, number]
        type: pointSchema,
        required: true
    }
})

const Hike = model('Hike', hikeSchema);

export default Hike;