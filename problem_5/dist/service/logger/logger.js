"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
class LoggerService {
    info(message, obj) {
        console.log(`[info]: ${message} ${obj ? JSON.stringify(obj) : ""}`);
    }
    error(message, obj) {
        console.log(`[error]: ${message} ${obj ? JSON.stringify(obj) : ""}`);
    }
}
exports.LoggerService = LoggerService;
