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
    createUser(req, res) {
        this.logger.info("Enter POST /user", req.params.id);
        const params = {
            fullName: req.body.fullName,
            sex: req.body.sex,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
        };
        return this.repository
            .createUser(params)
            .then((response) => {
            this.logger.info("Response POST /user: ", response);
            return res.status(200).send();
        })
            .catch((error) => {
            this.logger.error("Error POST /user: ", error);
            return res.status(500).send(error);
        });
    }
    getUsers(req, res) {
        this.logger.info("Enter POST /users", req.params.id);
        const params = {
            id: req.body.id,
            fullName: req.body.fullName,
            sex: req.body.sex,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
        };
        return this.repository
            .getUsers(params)
            .then((response) => {
            this.logger.info("Response POST /users: ", response);
            return res.send(response);
        })
            .catch((error) => {
            this.logger.error("Error POST /users: ", error);
            return res.status(500).send(error);
        });
    }
    getUserById(req, res) {
        this.logger.info("Enter GET /user/:id", req.params.id);
        const params = {
            id: Number(req.params.id),
        };
        return this.repository
            .getUserById(params)
            .then((response) => {
            this.logger.info("Response GET /user/:id: ", response);
            const user = response[0];
            if (!user)
                throw new Error("User not found");
            return res.send(response[0]);
        })
            .catch((error) => {
            this.logger.error("Error GET /user/:id: ", error.message);
            return res.status(500).send(error);
        });
    }
    updateUser(req, res) {
        this.logger.info("Enter PUT /user/:id", req.params.id);
        const params = {
            id: Number(req.params.id),
            fullName: req.body.fullName,
            sex: req.body.sex,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
        };
        return this.repository
            .updateUser(params)
            .then((response) => {
            this.logger.info("Response PUT /user/:id: ", response);
            return res.status(200).send();
        })
            .catch((error) => {
            this.logger.error("Error PUT /user/:id: ", error);
            return res.status(500).send(error);
        });
    }
    deleteUser(req, res) {
        this.logger.info("Enter DELETE /user/:id", req.params.id);
        const params = {
            id: Number(req.params.id),
        };
        return this.repository
            .deleteUser(params)
            .then((response) => {
            this.logger.info("Response DELETE /user/:id: ", response);
            return res.status(200).send();
        })
            .catch((error) => {
            this.logger.error("Error DELETE /user: ", error);
            return res.status(500).send(error);
        });
    }
}
exports.UserController = UserController;
