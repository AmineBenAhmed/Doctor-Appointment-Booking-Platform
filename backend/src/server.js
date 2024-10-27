import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/coudinary.js'
import {adminRouter} from './routes/adminRoute.js'
import {errorHandler} from './middlewares/error.js'


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

//Error handler
app.use(errorHandler);

app.listen(port, () => console.log("server started on port", port))

//Handle unhandled promise rejections
process.on('unhandledRejection', //listen to unhandledRejection event
  (err, promise) => { //when unhandledRejection event fired execute the cb function
    console.log(`Error: ${err.message}`.red.red);
    //Close server a exit process
    server.close(() => process.exit(1));
  });
