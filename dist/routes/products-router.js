"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const input_validation_middleware_1 = require("../middlewares/input-validation-middleware");
const products_service_1 = require("../domain/products-service");
exports.productsRoutes = (0, express_1.Router)({});
const titleValidationChain = () => (0, express_validator_1.body)('title').trim().notEmpty().withMessage('title is required');
exports.productsRoutes.get('/', async (req, res) => {
    const products = await products_service_1.productsService.findProducts(req.query.title?.toString());
    res.send(products);
});
exports.productsRoutes.get('/:id', async (req, res) => {
    const product = await products_service_1.productsService.findProductById(+req.params.id);
    if (product) {
        res.send(product);
    }
    else {
        res.status(404).send('Product not found :(');
    }
});
exports.productsRoutes.post('/', titleValidationChain(), input_validation_middleware_1.inputValidationMiddleware, async (req, res) => {
    const newProduct = await products_service_1.productsService.createProduct(req.body.title);
    res.status(201).send(newProduct);
});
exports.productsRoutes.put('/:id', titleValidationChain(), input_validation_middleware_1.inputValidationMiddleware, async (req, res) => {
    const product = await products_service_1.productsService.updateProductById(+req.params.id, req.body.title);
    if (product) {
        res.status(201).send(product);
    }
    else {
        res.status(404).send('Product with this id does not exist :(');
    }
});
exports.productsRoutes.delete('/:id', async (req, res) => {
    const productId = await products_service_1.productsService.deleteProductById(+req.params.id);
    if (productId !== null) {
        res.sendStatus(204);
    }
    else {
        res.status(404).send('Product with this id does not exist :(');
    }
});
