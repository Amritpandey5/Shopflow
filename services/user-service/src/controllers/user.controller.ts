
import { registerUser, getUserById } from '../services/user.service.js';

import type { Request, Response } from 'express';

function sanitizeUser(user: any) {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    }
}


async function registerUserController(req: Request, res: Response) {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Name, email and password are required" });
        }
        const newUser = await registerUser(name, email, password);
        return res.status(201).json(sanitizeUser(newUser));
    }
    catch (error) {
        console.error("REGISTER USER ERROR:", error);

        if (error instanceof Error && error.message === "User already exists") {
            return res.status(409).json({ message: "User already Exists" });
        }

        return res.status(500).json({ message: "Internal server error" });
    }
}

async function getUserByIdController(req: Request, res: Response) {
    const {id} = req.params as {id:string};
    if(!id){
        return res.status(400).json({ message: "User id is required" });
    }
    const user = await getUserById(id);
    if(!user){
        return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(sanitizeUser(user));
}


export { registerUserController,getUserByIdController };