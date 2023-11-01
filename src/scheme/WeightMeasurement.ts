import mongoose from 'mongoose'

const WeightMeasurement = new mongoose.Schema({
    weight: { type: Number, required: true },
    date: { type: Date, required: true }
})

export default mongoose.model('WeightMeasurement', WeightMeasurement)
