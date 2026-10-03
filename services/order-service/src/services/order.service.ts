
import {prisma} from '../config/database.js'

async function createOrder(userId:string,total:number){
    const order = await prisma.order.create({
        data:{
            userId,
            total
        }
    });


    return order;
}

export { createOrder };