export interface Logger {
    log(msg: string): void;
    error(msg: string): void;
  }
  
  export class ConsoleLogger implements Logger {
    log(msg: string) {
      console.log(`[LOG]: ${msg}`);
    }
  
    error(msg: string) {
      console.error(`[ERROR]: ${msg}`);
    }
  }
  