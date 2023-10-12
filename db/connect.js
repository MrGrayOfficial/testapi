require("dotenv").config();
const mongoose = require("mongoose");


const connectDB = () => {
    console.log("Connect Database...");
    return mongoose.connect(process.env.MONGODB_URL, {useUnifiedTopology: true});
}

module.exports = connectDB;