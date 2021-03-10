'use strict';
import mongoose from 'mongoose';

const subscriberSchema = mongoose.Schema({
    url: String,
    topic: String,
})

module.exports = mongoose.model('subscriber', subscriberSchema);