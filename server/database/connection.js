'use strict';
import mongoose from "mongoose";
import {DB_USER, DB_PASSWORD, DATABASE} from "babel-dotenv";

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.rj72t.mongodb.net/${DATABASE}?retryWrites=true&w=majority`;

//connecting to mongoose database
mongoose.Promise = global.Promise;

mongoose.connect(uri, { useNewUrlParser: true })
    .then(() => console.log('mongod Db connected'))
    .catch(err => console.log(err))