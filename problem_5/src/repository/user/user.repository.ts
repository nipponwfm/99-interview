import { DatabaseService } from "../../service/database/database";
import { DeleteUserParams, GetUserByIdParams, PostUserParams, PostUsersParams, PutUserParams, User } from "./user.repository.i";
import fs from "fs";
import path from "path";

export class UserRepository {
  private databaseService;

  constructor() {
    this.databaseService = new DatabaseService();
  }

  createUser(params: PostUserParams): Promise<void> {
    const sqlPath = path.join(__dirname, "../../config/sql/create-user.sql");
    const sql = String(fs.readFileSync(sqlPath));

    return this.databaseService.update$(sql, {
      $fullName: params.fullName,
      $sex: params.sex,
      $phoneNumber: params.phoneNumber,
      $address: params.address,
    });
  }

  getUsers(params: PostUsersParams): Promise<Array<User>> {
    const sqlPath = path.join(__dirname, "../../config/sql/get-users-by-filtered.sql");
    const sql = String(fs.readFileSync(sqlPath));

    return this.databaseService.query$(sql, {
      $id: params.id,
      $fullName: params.fullName,
      $sex: params.sex,
      $phoneNumber: params.phoneNumber,
      $address: params.address,
    });
  }

  getUserById(params: GetUserByIdParams): Promise<Array<User>> {
    const sqlPath = path.join(__dirname, "../../config/sql/get-user-by-id.sql");
    const sql = String(fs.readFileSync(sqlPath));

    return this.databaseService.query$(sql, {
      $id: params.id,
    });
  }

  updateUser(params: PutUserParams): Promise<void> {
    const sqlPath = path.join(__dirname, "../../config/sql/update-user.sql");
    const sql = String(fs.readFileSync(sqlPath));

    return this.databaseService.update$(sql, {
      $id: params.id,
      $fullName: params.fullName,
      $sex: params.sex,
      $phoneNumber: params.phoneNumber,
      $address: params.address,
    });
  }

  deleteUser(params: DeleteUserParams): Promise<void> {
    const sqlPath = path.join(__dirname, "../../config/sql/delete-user.sql");
    const sql = String(fs.readFileSync(sqlPath));

    return this.databaseService.update$(sql, {
      $id: params.id,
    });
  }
}
