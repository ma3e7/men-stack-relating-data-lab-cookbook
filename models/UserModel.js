const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name: String,
    instructions: String,
    cookingTime: Number,
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    pantry: [foodSchema],
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel