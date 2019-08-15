
import { createLogger, format, transports } from 'winston';
import dayjs from 'dayjs'

const { combine, timestamp, label, printf } = format;
 
const myFormat = printf(({ level, message, label, timestamp }) => {
      timestamp = dayjs(timestamp).format('MM-DD-YY HH:mm:ss')
      return `${timestamp} [${label}] ${level}: ${message}`;
});


export const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'mono-repo-' }), timestamp(), myFormat),
  transports: [  new transports.Console({ level: 'silly' }),]
});

const levels = { 
  error: 0, 
  warn: 1, 
  info: 2, 
  verbose: 3, 
  debug: 4, 
  silly: 5 
};

// export const logger = winston.createLogger({
//   level: levels,
//   format: winston.format.json(),
//   defaultMeta: { service: 'user-service' },
//   transports: [
//     //
//     // - Write to all logs with level `info` and below to `combined.log` 
//     // - Write all logs error (and below) to `error.log`.
//     //
//     new winston.transports.File({ filename: 'error.log', level: 'error' }),
//     new winston.transports.File({ filename: 'combined.log' })
//   ]
// });
 
// //
// // If we're not in production then log to the `console` with the format:
// // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// // 
// if (process.env.NODE_ENV !== 'production') {
//   logger.add(new winston.transports.Console({
//     format: winston.format.simple()
//   }));
// }