/**
 * Created by miket on 5/25/2017.
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const MessageSchema = new Schema({
    text: {
        type: String,
        required: true
    }
});
const Model = mongoose.model('Message', MessageSchema);

module.exports = Model;