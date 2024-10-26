import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/coudinary.js'
import {adminRouter} from './routes/adminRoute.js'


//app config
const app = express()
const port = process.env.PORt || 4000

//middlewares
app.use(express.json())
app.use(cors())


connectDB()
connectCloudinary()

// api endpoints 
app.use('/api/admin', adminRouter)

app.get('/', (req, res) => {
  res.send('API WORKING')
})

app.listen(port, () => console.log("server started on port", port))
