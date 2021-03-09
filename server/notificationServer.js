#!/usr/bin/env node
/**
 * Module dependencies.
 */
import http from "http";
import pino from "pino";
import debug from "debug";
import app from "./app.js";
import { HTTPPORT } from "babel-dotenv";

const logger = pino();
/**
 * Normalize a port into a number, string, or false.
 */

const normalizePort = (val) => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }
    if (port >= 0) {
        // port number
        return port;
    }
    return false;
};

/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(HTTPPORT || "7073");
app.set("port", port);

const server = http.createServer( app);

/**
 * Event listener for HTTP server "error" event.
 */

const onError = (error) => {
    if (error.syscall !== "listen") {
        throw error;
    }

    const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case "EACCES":
            logger.info(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case "EADDRINUSE":
            logger.info(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
};

/**
 * Event listener for HTTP server "listening" event.
 */

const onListening = () => {
    const addr = server.address();
    const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
    debug("Listening on " + bind);
};

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () => {
    logger.info(`Listening from port ${port}`);
});

server.on("error", onError);
server.on("listening", onListening);