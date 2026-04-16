import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/db.js';
import userRouter from './routes/UserRoutes.js';
import chatRouter from './routes/chatRoutes.js';
import messageRouter from './routes/messageRoutes.js';
import creditRouter from './routes/creditRoutes.js';
import { stripeWebhook } from './controller/webhook.js';

const app = express();

await connectDB()

app.post('/api/stripe', express.raw({type: 'application/json'}),stripeWebhook)

//Middlewere
app.use(cors())
app.use(express.json())

//Routes
app.get('/', (res, req) => res.send('server is live'))
app.get('/api/user', userRouter)
app.use('/api/chat', chatRouter)
app.use('/api/message', messageRouter)
app.use('/api/credit', creditRouter )

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`server is runing at ${PORT}`)
})