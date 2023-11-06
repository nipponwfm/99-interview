"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const logger_1 = require("../logger/logger");
const sqlite3_1 = __importDefault(require("sqlite3"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class DatabaseService {
    constructor() {
        this.logger = new logger_1.LoggerService();
        const databaseFileUrl = path_1.default.join(__dirname, "./data/database.db");
        this.database = new sqlite3_1.default.Database(databaseFileUrl, sqlite3_1.default.OPEN_READWRITE, (error) => {
            if (error) {
                this.logger.error(error.message);
                throw new Error("Can connect to database");
            }
        });
        const mockDataDatabaseUrl = path_1.default.join(__dirname, "./data/mock-data.sql");
        const sql_mockData = String(fs_1.default.readFileSync(mockDataDatabaseUrl));
        this.database.exec(sql_mockData, (error) => {
            if (error)
                throw new Error(error.message);
        });
        return;
    }
    query$(sql, pattern) {
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
    update$(sql, pattern) {
        this.database.run(sql, [...pattern], (error) => {
            if (error)
                throw new Error(error.message);
        });
        return;
    }
}
exports.DatabaseService = DatabaseService;
