import { IDatabaseService } from "./database.i";
import { LoggerService } from "../logger/logger";
import sqlite3 from "sqlite3";
import fs from "fs";
import path from "path";

export class DatabaseService implements IDatabaseService {
  private logger = new LoggerService();
  private database;

  constructor() {
    const databaseFileUrl = path.join(__dirname, "./data/database.db");
    this.database = new sqlite3.Database(databaseFileUrl, sqlite3.OPEN_READWRITE, (error) => {
      if (error) {
        this.logger.error(error.message);
        throw new Error("Can connect to database");
      }
    });

    const mockDataDatabaseUrl = path.join(__dirname, "./data/mock-data.sql");
    const sql_mockData = String(fs.readFileSync(mockDataDatabaseUrl));

    this.database.exec(sql_mockData, (error) => {
      if (error) throw new Error(error.message);
    });

    return;
  }

  query$(sql: string, pattern: Array<any>): Promise<any> {
    const result = new Promise((resolved, rejected) => {
      this.database.all(sql, [...pattern], (error, rows) => {
        if (error) {
          rejected(new Error(error.message));
        }
        return resolved(rows);
      });
    });

    return result;
  }

  update$(sql: string, pattern: Array<any>): void {
    this.database.run(sql, [...pattern], (error) => {
      if (error) throw new Error(error.message);
    });

    return;
  }
}
