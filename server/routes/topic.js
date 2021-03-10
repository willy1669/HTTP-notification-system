'use strict';
import pkg from 'express';
import { publish } from '../controllers/topic.js';

const { Router } = pkg;

//Instantiate express router
const topicRoute = Router();

topicRoute.post(publish);

export default topicRoute;