"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../../controller/user.controller");
const user_guard_1 = require("./user.guard");
const router = express_1.default.Router();
const controller = new user_controller_1.UserController();
router.post("/user", (0, user_guard_1.createRouterGuard)(), user_guard_1.isValid, controller.createUser.bind(controller));
router.post("/users", (0, user_guard_1.getUsersRouterGuard)(), user_guard_1.isValid, controller.getUsers.bind(controller));
router.get("/user/:id", controller.getUserById.bind(controller));
router.put("/user/:id", (0, user_guard_1.putUserRouterGuard)(), user_guard_1.isValid, controller.updateUser.bind(controller));
router.delete("/user/:id", user_guard_1.isValid, controller.deleteUser.bind(controller));
exports.default = router;
