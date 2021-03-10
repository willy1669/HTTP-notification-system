'use strict';
import mongoose from 'mongoose';

const { Schema } = mongoose;
const { String } = Schema.Types;

const subscriberSchema = new Schema({
    url: {
        String,
    },
    topic: {String},
})

module.exports = mongoose.model('subscriber', subscriberSchema);