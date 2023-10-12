require("dotenv").config();
const mongoose = require("mongoose");

const uri = "mongodb+srv://aksky2000:i8ytFRwsp5VsX0lw@cluster0.ektwjje.mongodb.net/?retryWrites=true&w=majority"

const connectDB = () => {
    console.log("Connect Database...");
    return mongoose.connect(process.env.MONGODB_URL, {useUnifiedTopology: true});
}

module.exports = connectDB;