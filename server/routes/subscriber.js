'use strict';
import pkg from 'express';
import { createSubscription } from '../controllers/subscriber.js';

const { Router } = pkg;

//Instantiate express router
const subscriberRoute = Router();

subscriberRoute.post(createSubscription);

export default subscriberRoute;