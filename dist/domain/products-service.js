"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsService = void 0;
const repositories_1 = require("../repositories");
exports.productsService = {
    async findProducts(title) {
        return repositories_1.productsRepository.findProducts(title);
    },
    async findProductById(id) {
        return repositories_1.productsRepository.findProductById(id);
    },
    async createProduct(title) {
        const newProduct = { id: +(new Date()), title };
        return repositories_1.productsRepository.createProduct(newProduct);
    },
    async updateProductById(id, title) {
        return repositories_1.productsRepository.updateProductById(id, title);
    },
    async deleteProductById(id) {
        return repositories_1.productsRepository.deleteProductById(id);
    }
};
