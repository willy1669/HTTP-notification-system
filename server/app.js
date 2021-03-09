'use strict';
import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import compression from 'compression'
import trimmer from './middlewares/trimmer.js'

// Instantiate express server
const app = express();

app.disable('etag');
app.disable('x-powered-by');
app.use(helmet());

// Parse URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Compress all routes
app.use(compression());

// removes whitespace from payload
app.use(trimmer);

export default app;