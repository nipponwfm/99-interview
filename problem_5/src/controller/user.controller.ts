import { Request, Response } from "express";
import { UserResponse, UsersResponse } from "./user.controller.i";
import { LoggerService } from "../service/logger/logger";
import { UserRepository } from "../repository/user/user.repository";
import { DeleteUserParams, GetUserByIdParams, PostUserParams, PostUsersParams, PutUserParams, User } from "../repository/user/user.repository.i";

export class UserController {
  private logger = new LoggerService();
  private repository = new UserRepository();

  createUser(req: Request, res: Response) {
    this.logger.info("Enter POST /user", req.params.id);

    const params: PostUserParams = {
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
      .catch((error: any) => {
        this.logger.error("Error POST /user: ", error);
        return res.status(500).send(error);
      });
  }

  getUsers(req: Request, res: Response): Promise<UsersResponse> {
    this.logger.info("Enter POST /users", req.params.id);

    const params: PostUsersParams = {
      id: req.body.id,
      fullName: req.body.fullName,
      sex: req.body.sex,
      phoneNumber: req.body.phoneNumber,
      address: req.body.address,
    };

    return this.repository
      .getUsers(params)
      .then((response: Array<User>) => {
        this.logger.info("Response POST /users: ", response);
        return res.send(response);
      })
      .catch((error: any) => {
        this.logger.error("Error POST /users: ", error);
        return res.status(500).send(error);
      });
  }

  getUserById(req: Request, res: Response): Promise<UserResponse> {
    this.logger.info("Enter GET /user/:id", req.params.id);

    const params: GetUserByIdParams = {
      id: Number(req.params.id),
    };

    return this.repository
      .getUserById(params)
      .then((response: Array<User>) => {
        this.logger.info("Response GET /user/:id: ", response);

        const user = response[0];
        if (!user) throw new Error("User not found");

        return res.send(response[0]);
      })
      .catch((error: any) => {
        this.logger.error("Error GET /user/:id: ", error.message);
        return res.status(500).send(error);
      });
  }

  updateUser(req: Request, res: Response) {
    this.logger.info("Enter PUT /user/:id", req.params.id);

    const params: PutUserParams = {
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
      .catch((error: any) => {
        this.logger.error("Error PUT /user/:id: ", error);
        return res.status(500).send(error);
      });
  }

  deleteUser(req: Request, res: Response) {
    this.logger.info("Enter DELETE /user/:id", req.params.id);

    const params: DeleteUserParams = {
      id: Number(req.params.id),
    };

    return this.repository
      .deleteUser(params)
      .then((response) => {
        this.logger.info("Response DELETE /user/:id: ", response);
        return res.status(200).send();
      })
      .catch((error: any) => {
        this.logger.error("Error DELETE /user: ", error);
        return res.status(500).send(error);
      });
  }
}
