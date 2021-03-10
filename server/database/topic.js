'use strict';
import topicModel from './models/topic';

export const createTopic = async (topic, data) => {
    const response = await topicModel.create({topic, data});
    if (response) {
        return {success: true, data: {topic, data}}
    }
    return {success: false, message: `Error.`}
}

export const publishTopic = async (topic) => {
    const response = await topicModel.findOne({topic});
    if (response) {
        response.subscribers.push(response);
        response.save();

        return {success: true, data: {topic}}
    }
    return {success: false, message: `Error.`}
}