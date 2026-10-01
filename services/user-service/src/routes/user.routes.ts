import { Router, type Router as ExpressRouter } from "express";
import { registerUserController, getUserByIdController } from "../controllers/user.controller.js";

export const router: ExpressRouter = Router();

router.post("/register", registerUserController);
router.get("/:id", getUserByIdController);

