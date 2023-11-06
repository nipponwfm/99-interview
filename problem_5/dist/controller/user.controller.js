"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const logger_1 = require("../service/logger/logger");
const user_repository_1 = require("../repository/user/user.repository");
class UserController {
    constructor() {
        this.logger = new logger_1.LoggerService();
        this.repository = new user_repository_1.UserRepository();
    }
    // getUsers(req: Request, res: Response): Promise<any> {
    //   return;
    // }
    getUserById(req, res) {
        this.logger.info("Enter GET /user/:id", req.params.id);
        const params = {
            id: Number(req.params.id),
        };
        return this.repository
            .getUserById(params)
            .then((response) => {
            this.logger.info("Response GET /user/:id: ", response);
            return res.send(response[0]);
        })
            .catch((error) => {
            this.logger.error("Error GET /user/:id: ", error);
            return res.status(500).send(error);
        });
    }
}
exports.UserController = UserController;
