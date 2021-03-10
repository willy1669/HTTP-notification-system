'use strict';
import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const topicSchema = new Schema({
    topic: String,
    data: {String},
    subscribers: [{
        subscriberId: {
            type: ObjectId,
            ref: 'subscriber',
        }
    }]
})

module.exports = mongoose.model('topic', topicSchema);