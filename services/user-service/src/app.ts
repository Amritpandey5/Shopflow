import express, { type Express } from "express";
import { router as userRouter } from "./routes/user.routes.js"; 
const app:Express = express();

app.use(express.json());

app.use('/users', userRouter);

app.get('/',(req,res)=>{
    return res.status(200).json({message:"User service is running"});
})

export default app;