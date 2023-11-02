import { Schema, model } from 'mongoose'

const User = new Schema({
    username: { type: String, required: true, unique: true }, //униакльный
    password: { type: String, required: true },
    roles: [{ type: String, ref: 'Role' }] // каждый пользователь будет обладать массивом каких-то ролей. указываем ссылку на другую сущность Role
})

export default model('User', User)
