require("dotenv").config();

const connectDB = require("../db/connect");
const Product = require("./product");
const ProductJson = require("./products.json");

const start1 = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);

        await Product.deleteMany();

        await Product.create(ProductJson);
        console.log("Success");

    } catch (error) {
        console.log("error");
    }
}

// start();

module.exports = start1;