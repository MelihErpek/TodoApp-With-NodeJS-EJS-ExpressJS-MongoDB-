const mongoose = require("mongoose")
const { schema } = require("../../mongoose/models/Article")
const Schema = mongoose.Schema
const todoSchema = new Schema({
    content:{
        type:String
    }
})

module.exports = mongoose.model('yapilacaklar',todoSchema)