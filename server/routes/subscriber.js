'use strict';
import pkg from 'express';
import { createSubscription } from '../controllers/subscriber.js';

const { Router } = pkg;

//Instantiate express router
const subscriptionRoute = Router();

subscriptionRoute.post(createSubscription);

export default subscriptionRoute;