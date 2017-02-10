export class Logger {
    log(message: string) {
        console.log(message);
    }
}

let logger = new Logger();
logger.log('hello there');