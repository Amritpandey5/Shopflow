
import {prisma} from '../config/database.js'
import {getUserById} from '../clients/user.client.js'

async function createOrder(userId:string,total:number){

    const user = await getUserById(userId);

    if(!user){
        throw new Error("User not found");
    }

    const order = await prisma.order.create({
        data:{
            userId,
            total
        }
    });


    return order;
}

export { createOrder };