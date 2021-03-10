'use strict';
import subscriberModel from './models/subscriber';
import topicModel from './models/topic';

export const subscriber = async (url, topic) => {
    const result = await topicModel.findOne({topic});

    if (result !== null) {
        const response = await subscriberModel.create({url});
        if (response) {
            return {success: true, data: {url, topic}}
        }
        return {success: false, message: `Error.`}
    }
    return {success: false, message: `No topic found.`}
}