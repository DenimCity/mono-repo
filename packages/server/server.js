import "dotenv/config";
import express from 'express';
import cors from 'cors'

import { logger } from "./src/utils/logger";


// Define levels to be like log4j in java
var customLevels = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
  },
  colors: {
    debug: 'blue',
    info: 'green',
    warn: 'yellow',
    error: 'red'
  }
};

// import logger from './lib/';
// import routes from './routes'

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 4000;

const server = app
    .use(express.json())
    .use(cors())
    .use(router)
    .use('/user', (req, res) => res.send(customLevels))
    .listen(PORT, () => {
        logger.info(`Express server is alive on port ${ PORT }`);
    })

const gracefulShutdown = async() => {
    console.log('Shutting down gracefully...');
    await server.close();
    console.log('Closed all active connections.');
    setTimeout(() => {
        console.log('Could not close connections after 10 seconds. Forcefully shutting down');
        process.exit();
    }, 50);
};

// logger

// // listen for TERM signal .e.g. kill
process.on('SIGTERM', gracefulShutdown);
// // listen for INT signal e.g. Ctrl-C
process.on('SIGINT', gracefulShutdown);
// // listen for nodemon's restart
process.on('SIGUSR2', gracefulShutdown);