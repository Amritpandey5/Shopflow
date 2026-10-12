import dotenv from 'dotenv'
dotenv.config();

import app from './app.js'

import {prisma} from './config/database.js'

const PORT = process.env.PORT || 3003;

async function startServer(){
    try {
        await prisma.$connect();
        console.log('Connected to the database');
        app.listen(PORT,()=>{
            console.log(`Product service is running on port ${PORT}`);
        })
    } catch (error) {
        console.error('Failed to start the Product Service', error);
        process.exit(1); 
    }
}

startServer();