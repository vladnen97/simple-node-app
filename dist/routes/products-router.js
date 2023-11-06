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
exports.productsRoutes = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const input_validation_middleware_1 = require("../middlewares/input-validation-middleware");
const products_service_1 = require("../domain/products-service");
exports.productsRoutes = (0, express_1.Router)({});
const titleValidationChain = () => (0, express_validator_1.body)('title').trim().notEmpty().withMessage('title is required');
exports.productsRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const products = yield products_service_1.productsService.findProducts((_a = req.query.title) === null || _a === void 0 ? void 0 : _a.toString());
    res.send(products);
}));
exports.productsRoutes.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield products_service_1.productsService.findProductById(+req.params.id);
    if (product) {
        res.send(product);
    }
    else {
        res.status(404).send('Product not found :(');
    }
}));
exports.productsRoutes.post('/', titleValidationChain(), input_validation_middleware_1.inputValidationMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = yield products_service_1.productsService.createProduct(req.body.title);
    res.status(201).send(newProduct);
}));
exports.productsRoutes.put('/:id', titleValidationChain(), input_validation_middleware_1.inputValidationMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield products_service_1.productsService.updateProductById(+req.params.id, req.body.title);
    if (product) {
        res.status(201).send(product);
    }
    else {
        res.status(404).send('Product with this id does not exist :(');
    }
}));
exports.productsRoutes.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productId = yield products_service_1.productsService.deleteProductById(+req.params.id);
    if (productId !== null) {
        res.sendStatus(204);
    }
    else {
        res.status(404).send('Product with this id does not exist :(');
    }
}));
