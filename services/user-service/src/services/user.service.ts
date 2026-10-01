import bcrypt from "bcrypt";
import {prisma}  from "../config/database.js";



async function registerUser(name:string,email:string,password:string){

    const existinguser  = await findUserByEmail(email);

    if(existinguser){
        throw new Error("User already exists");
    }
    const hashedPassword =await bcrypt.hash(password, 10);
    const newUser =await prisma.user.create({
        data:{
            name,
            email,
            passwordHash:hashedPassword,
        }
        
        
    })

    return newUser;

}

async function findUserByEmail(email:string){
    return await prisma.user.findUnique({
        where:{
            email
        }
    })
}

async function getUserById(id:string){
    return await prisma.user.findUnique({
        where:{
            id
        }
    })

}

export {registerUser,findUserByEmail,getUserById}