require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require("./db/connect");
const start1 = require("./models/productDB")

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

app.get('/',(req,res)=>{
    res.send("I am working!");
});

//Middlewares for routes

app.use("/api/products", products_routes);

const start = async () => {
    try {
        
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server is running on PORT: ${PORT}`)
        })
    } catch (error) {
        console.log(error);
    }
}

start();


// Saving data into database
// start1();
