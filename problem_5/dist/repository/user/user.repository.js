"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const database_1 = require("../../service/database/database");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class UserRepository {
    constructor() {
        this.databaseService = new database_1.DatabaseService();
    }
    getUserById(params) {
        const sqlPath = path_1.default.join(__dirname, "../../config/sql/get-user-by-id.sql");
        const sql = String(fs_1.default.readFileSync(sqlPath));
        return this.databaseService.query$(sql, [params.id]);
    }
}
exports.UserRepository = UserRepository;
