import {prisma} from '../config/database.js'


export async function createProduct(name:string,descriptions:string,price:number){
    const product = await prisma.product.create({
        data:{
            name,
            descriptions,
            price
        }
    })

    return product
}


export async function getAllProducts(){
    const allProducts = await prisma.product.findMany({
        orderBy:{
            createdAt:'desc'
        }
    })
    return allProducts;
}