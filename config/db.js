const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://srishitha0616:123456123456@in-rishi.oy860.mongodb.net/max-store?retryWrites=true&w=majority&appName=In-Rishi")

const connection = mongoose.connection;

connection.on('connected', () => (console.log("DB Connected")))
connection.on('error', () => (console.log("DB Error")))

module.exports = mongoose

// const db = require('./config/db')