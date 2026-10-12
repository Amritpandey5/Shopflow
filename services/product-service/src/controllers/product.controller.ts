import type {Request,Response} from 'express'
import {createProduct,getAllProducts} from '../services/product.service.js'

export async function createProductController(req:Request,res:Response){
    try {
        const {name ,descriptions, price} = req.body;

        if(typeof name != 'string' || name.trim().length === 0){
            return res.status(400).json({
                message:'Product Name is Required'
            })
        }
        if(typeof price != 'number' || !Number.isFinite(price) || price <= 0){
            return res.status(400).json({
                message:'Price must be positive number'
            })
        }

        const product = await createProduct(name.trim(),descriptions,price);

        return res.status(201).json({
            message:'Product created successfully',
            product
        })

    } catch (error) {
        console.error('Failed to create Product',error);
        return res.status(500).json({
            message:'Internal Server Error'
        })
    }
}

export async function getAllProductController(req:Request,res:Response){
    try {
        const allProducts = await getAllProducts();

        return res.status(200).json({
            count:allProducts.length,
            products:allProducts
        })
    } catch (error) {
        console.error('Fail to fetch the all Products',error);

        return res.status(500).json({
            message:'Internal Server Error'
        }) 
    }
}