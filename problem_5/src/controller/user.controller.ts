import { Request, Response } from "express";
import { UserResponse } from "./user.controller.i";
import { LoggerService } from "../service/logger/logger";
import { UserRepository } from "../repository/user/user.repository";
import { GetUserByIdParams, User } from "../repository/user/user.repository.i";

export class UserController {
  private logger = new LoggerService();
  private repository = new UserRepository();

  // getUsers(req: Request, res: Response): Promise<any> {
  //   return;
  // }

  getUserById(req: Request, res: Response): Promise<UserResponse> {
    this.logger.info("Enter GET /user/:id", req.params.id);

    const params: GetUserByIdParams = {
      id: Number(req.params.id),
    };

    return this.repository
      .getUserById(params)
      .then((response: Array<User>) => {
        this.logger.info("Response GET /user/:id: ", response);
        return res.send(response[0]);
      })
      .catch((error: any) => {
        this.logger.error("Error GET /user/:id: ", error);
        return res.status(500).send(error);
      });
  }
}
