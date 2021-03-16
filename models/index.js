const mongoose = require('mongoose')
const users = require('./User')

const Schema = mongoose.Schema

const createSchema = (schema) => {
    const model = new Schema(schema, { timestamps: true })
    return model
}

const User = mongoose.model('Users', createSchema(users))
