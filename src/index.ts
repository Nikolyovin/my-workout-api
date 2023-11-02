import express from 'express'
import { weightRouter } from './routers/weight-router'
import mongoose from 'mongoose'
import { authRouter } from './routers/auth-router'

const app = express()
const PORT = process.env.PORT || 5200
const DB_URL = 'mongodb://localhost:27017/my-workout'

app.use(express.json()) //нужно тк express по дефолту не понимает json
app.use('/weight', weightRouter)
app.use('/auth', authRouter)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

startApp()
