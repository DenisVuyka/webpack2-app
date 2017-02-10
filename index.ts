export class Logger {
    log(message: string) {
        console.log(message);
    }
}

let logger = new Logger();
logger.log('hello there');

if (process.env.NODE_ENV === 'production') {
  console.log('Welcome to production');
}
if (process.env.DEBUG) {
  console.log('Debugging output');
}
