'use strict'
import {publishTopic} from '../database/topic.js'

export const publish = async (req, res) => {
    const {topic} = req.params;

    const result = await publishTopic(topic);
    if (result.success === true) {
        return res.status(201).json({success: true, data: result.data});
    }
    return res.status(501).json({success: result.success, message: result.message});
}