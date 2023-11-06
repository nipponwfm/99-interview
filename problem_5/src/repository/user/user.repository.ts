import { DatabaseService } from "../../service/database/database";
import { GetUserByIdParams, PostUsersParams, User } from "./user.repository.i";
import fs from "fs";
import path from "path";

export class UserRepository {
  private databaseService;

  constructor() {
    this.databaseService = new DatabaseService();
  }

  getUsers(params: PostUsersParams): Promise<Array<User>> {
    const sqlPath = path.join(__dirname, "../../config/sql/get-users-by-filtered.sql");
    const sql = String(fs.readFileSync(sqlPath));

    return this.databaseService.query$(sql, [params.id]);
  }

  getUserById(params: GetUserByIdParams): Promise<Array<User>> {
    const sqlPath = path.join(__dirname, "../../config/sql/get-user-by-id.sql");
    const sql = String(fs.readFileSync(sqlPath));

    return this.databaseService.query$(sql, [params.id]);
  }
}
