'use strict';
import mongoose from 'mongoose';

const { Schema } = mongoose;
const { String } = Schema.Types;

const subscriberSchema = new Schema({
    url: {
        String,
        required: true,
    },
    topic: {String},
})

module.exports = mongoose.model('subscriber', subscriberSchema);