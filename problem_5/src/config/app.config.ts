export interface IENV {
  PORT?: number;
  BOT_BASE_URL?: string;
}

export interface IConfig {
  port: number;
}

export class AppConfig implements IConfig {
  public port: number = 3001;

  constructor() {
    this.port = Number(process.env.PORT) || this.port;
  }
}
