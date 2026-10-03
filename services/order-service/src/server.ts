import dotenv from 'dotenv'
dotenv.config();


import app from './app.js'
import { prisma } from './config/database.js';

const PORT = process.env.PORT || 3002;


async function startServer(){
    try {
        await prisma.$connect();

        console.log('Connected to the Database');

        app.listen(PORT, ()=>{
            console.log(`Order Service is Running on port ${PORT}`);
            
        });
        
    } catch (error) {
        console.error('Failed to start the order service',error);
        process.exit(1);
        
    }
}

startServer();
