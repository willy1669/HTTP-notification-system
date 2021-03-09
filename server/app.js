'use strict';
import express from "express";
import helmet from "helmet";
import bodyParser from "body-parser";

// Instantiate express server
const app = express();

app.disable("etag");
app.disable("x-powered-by");
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

export default app;