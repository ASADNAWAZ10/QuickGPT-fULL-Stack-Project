import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/db.js';
import UserRoutes from './routes/UserRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import creditRoutes from './routes/creditRoutes.js';
import { stripeWebhook } from './controller/webhook.js';

const app = express();

app.post('/api/stripe', express.raw({type: 'application/json'}),stripeWebhook)

await connectDB().catch(err => console.log("db error", err))

//Middlewere
app.use(cors())
app.use(express.json())

//Routes
app.get('/', (res, req) => res.send('server is live'))
app.get('/api/user', UserRoutes)
app.use('/api/chat', chatRoutes)
app.use('/api/message', messageRoutes)
app.use('/api/credit', creditRoutes )

const PORT = process.env.PORT || 3000

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
}



export default app;