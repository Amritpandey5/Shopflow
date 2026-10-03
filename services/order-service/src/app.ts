import express , {type Express} from 'express'

import {router as orderRouter} from './routes/order.routes.js'

const app:Express = express();

app.use(express.json());

app.use('/orders',orderRouter);

app.get('/',(req,res)=>{
    res.status(200).json({
        message:'Order Service is Running'
    })
})

export default app;