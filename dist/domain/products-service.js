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
exports.productsService = void 0;
const repositories_1 = require("../repositories");
exports.productsService = {
    findProducts(title) {
        return __awaiter(this, void 0, void 0, function* () {
            return repositories_1.productsRepository.findProducts(title);
        });
    },
    findProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return repositories_1.productsRepository.findProductById(id);
        });
    },
    createProduct(title) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProduct = { id: +(new Date()), title };
            return repositories_1.productsRepository.createProduct(newProduct);
        });
    },
    updateProductById(id, title) {
        return __awaiter(this, void 0, void 0, function* () {
            return repositories_1.productsRepository.updateProductById(id, title);
        });
    },
    deleteProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return repositories_1.productsRepository.deleteProductById(id);
        });
    }
};
