"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.productsCollection = exports.client = void 0;
const mongodb_1 = require("mongodb");
// Replace the placeholder with your Atlas connection string
const uri = process.env.mongoURI || 'mongodb://127.0.0.1:27017';
exports.client = new mongodb_1.MongoClient(uri);
const db = exports.client.db('shop');
exports.productsCollection = db.collection('products');
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Connect the client to the server (optional starting in v4.7)
            yield exports.client.connect();
            // Send a ping to confirm a successful connection
            yield exports.client.db('storage').command({ ping: 1 });
            console.log('You successfully connected to MongoDB!');
        }
        catch (_a) {
            // Ensures that the client will close when you finish/error
            yield exports.client.close();
        }
    });
}
exports.run = run;
