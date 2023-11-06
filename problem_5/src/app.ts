import express from "express";
import http from "http";
import { AppConfig } from "./config/app.config";
import { LoggerService } from "./service/logger/logger";

import * as userRouter from "./router/user-router/user.router";

class App {
  private app = express();
  private config = new AppConfig();
  private logger = new LoggerService();

  constructor() {
    this.app.use(userRouter.default);

    const server = http.createServer(this.app);

    server.listen(this.config.port, () => {
      this.logger.info("Listening on port: ", this.config.port);
    });
  }
}

new App();
