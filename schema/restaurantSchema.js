const mongoose = require('mongoose')

const restaurant = new mongoose.Schema({
    name: String,
    about: String,
    imageUrl: String,
    NumberOfTables: Int,
    openHour: Double,
    closeHour: Double 
})

module.exports = mongoose.model("Restaurant",resModel)