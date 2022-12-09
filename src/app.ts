import express from 'express'
import { router } from './router'
import * as dotenv from 'dotenv'

const app = express()

app.use(express.json())

dotenv.config();
app.use(router)

export { app }