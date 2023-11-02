import { Schema, model } from 'mongoose'

const Role = new Schema({
    value: { type: String, unique: true, default: 'USER' } //по умолчанию роль Юзер
})

export default model('Role', Role)
