'use strict'
const mongoose = require('mongoose')
    , Schema = mongoose.Schema

var TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Enter the name of the task'
    },
    created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
})

module.exports = mongoose.model('Tasks', TaskSchema)