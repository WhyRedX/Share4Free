import express from "express"
import dotenv from "dotenv"
import corss from "cors"
import connectDB from "./config/db"

const app = express()
dotenv.config()

connectDB();

app.use(corss())

const PORT = process.env.PORT;

app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`))