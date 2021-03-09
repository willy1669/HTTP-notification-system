'use strict';
import express from "express";
import helmet from "helmet";

// Instantiate express server
const app = express();

app.disable("etag");
app.disable("x-powered-by");
app.use(helmet());

export default app;