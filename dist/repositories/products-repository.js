"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRepository = void 0;
const products = [{ id: 1, title: 'tomato' }, { id: 2, title: 'orange' }];
exports.productsRepository = {
    async findProducts(title) {
        if (title) {
            return products.filter(el => el.title.indexOf(title) !== -1);
        }
        else {
            return products;
        }
    },
    async findProductById(id) {
        return products.find(p => p.id === id);
    },
    async createProduct(title) {
        const newProduct = { id: +(new Date()), title };
        products.push(newProduct);
        return newProduct;
    },
    async updateProductById(id, title) {
        const productId = products.findIndex(el => el.id === id);
        if (productId !== -1) {
            products[productId].title = title;
            return products[productId];
        }
    },
    async deleteProductById(id) {
        const productId = products.findIndex(el => el.id === id);
        if (productId !== -1) {
            products.splice(productId, 1);
            return productId;
        }
    }
};
