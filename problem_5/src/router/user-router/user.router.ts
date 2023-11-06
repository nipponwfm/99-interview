import express from "express";
import { UserController } from "../../controller/user.controller";
import {} from "./user.guard";

const router = express.Router();
const controller = new UserController();

router.get("/user/:id", controller.getUserById.bind(controller));

export default router;
