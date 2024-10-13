import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import authRoutes from './routes/auth.Routes'

const app = express()

app.use(express.json())

//Routes
app.use('/auth/', authRoutes)
// Auth

// User

console.log('Success!');
export default app