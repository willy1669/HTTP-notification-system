'use strict';
import express from "express";

// Instantiate express server
const app = express();

app.disable("etag");
app.disable("x-powered-by");

export default app;