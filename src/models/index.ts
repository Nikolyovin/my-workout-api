import { Document, ObjectId } from 'mongoose'

export type WeightRequestType = {
    weight: number
    date: Date
}

export interface WeightResponseType extends Document {
    // _id: ObjectId
    weight: number
    date: Date
    // __v: number
}
