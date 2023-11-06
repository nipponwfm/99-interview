import express from "express";
import { UserController } from "../../controller/user.controller";
import { createRouterGuard, getUsersRouterGuard, isValid, putUserRouterGuard } from "./user.guard";

const router = express.Router();
const controller = new UserController();

router.post("/user", createRouterGuard(), isValid, controller.createUser.bind(controller));
router.post("/users", getUsersRouterGuard(), isValid, controller.getUsers.bind(controller));
router.get("/user/:id", controller.getUserById.bind(controller));
router.put("/user/:id", putUserRouterGuard(), isValid, controller.updateUser.bind(controller));
router.delete("/user/:id", isValid, controller.deleteUser.bind(controller));

export default router;
