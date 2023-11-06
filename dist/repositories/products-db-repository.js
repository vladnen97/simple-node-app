"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRepository = void 0;
const db_1 = require("./db");
exports.productsRepository = {
    async findProducts(title) {
        const filter = {};
        if (title) {
            filter.title = { $regex: title };
        }
        return db_1.productsCollection.find(filter).toArray();
    },
    async findProductById(id) {
        return db_1.productsCollection.findOne({ id });
    },
    async createProduct(product) {
        await db_1.productsCollection.insertOne(product);
        return product;
    },
    async updateProductById(id, title) {
        const result = await db_1.productsCollection.updateOne({ id }, { $set: { title } });
        if (result.matchedCount === 1) {
            return db_1.productsCollection.findOne({ id });
        }
        else {
            return null;
        }
    },
    async deleteProductById(id) {
        const result = await db_1.productsCollection.deleteOne({ id });
        return result.deletedCount === 1 ? id : null;
    }
};
