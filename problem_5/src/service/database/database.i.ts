export interface IDatabaseService {
  query$(sql: string, pattern: Array<any>): Promise<any>;
  update$(sql: string, pattern: Array<any>): void;
}
