'use strict'
import {subscriber} from '../database/subscriber.js'

export const createSubscription = async (req, res) => {
    const {url} = req.body;
    const {topic} = req.params;

    const result = await subscriber(url, topic);
    if (result.success === true) {
        return res.status(201).json({success: true, data: result.data});
    }
    return res.status(501).json({success: result.success, message: result.message});
}