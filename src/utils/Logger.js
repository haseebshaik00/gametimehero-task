"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = void 0;
class ConsoleLogger {
    log(msg) {
        console.log(`[LOG]: ${msg}`);
    }
    error(msg) {
        console.error(`[ERROR]: ${msg}`);
    }
}
exports.ConsoleLogger = ConsoleLogger;
