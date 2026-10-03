import type { Request, Response } from "express";
import {createOrder} from '../services/order.service.js'
import { types } from "node:util";


async function createOrderController(req: Request, res: Response) {
    try {
        const {userId,total} = req.body;
        if(!userId || !total){
            return res.status(400).json({message:'userId and total are required'});
        }
        if(typeof total != "number" || total <0){
            return res.status(400).json({
                message:'Total must me positive number'
            })
        }

        const order = await createOrder(userId,total);
        res.status(201).json(order)
    } catch (error) {
        console.error('CREATE ORDER ERROR',error);

        return res.status(500).json({
            message:'Internal server error'
        })
        
    }
}

export {createOrderController}