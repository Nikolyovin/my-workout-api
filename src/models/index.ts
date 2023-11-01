import { Document } from 'mongoose'

export type WeightCreateType = {
    weight: number
    date: Date
}

export type WeightUpdateType = {
    weight?: number
    date?: Date
}

export interface WeightResponseType extends Document {
    weight: number
    date: Date
}

export type URIParams = {
    /**
     *id of existing weight
     */
    id: string
}
