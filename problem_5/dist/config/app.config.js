"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
class AppConfig {
    constructor() {
        this.port = 3001;
        this.port = Number(process.env.PORT) || this.port;
    }
}
exports.AppConfig = AppConfig;
