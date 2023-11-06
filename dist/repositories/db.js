"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.productsCollection = exports.client = void 0;
const mongodb_1 = require("mongodb");
// Replace the placeholder with your Atlas connection string
const uri = process.env.mongoURI || 'mongodb://127.0.0.1:27017';
exports.client = new mongodb_1.MongoClient(uri);
const db = exports.client.db('shop');
exports.productsCollection = db.collection('products');
async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await exports.client.connect();
        // Send a ping to confirm a successful connection
        await exports.client.db('storage').command({ ping: 1 });
        console.log('You successfully connected to MongoDB!');
    }
    catch {
        // Ensures that the client will close when you finish/error
        await exports.client.close();
    }
}
exports.run = run;
