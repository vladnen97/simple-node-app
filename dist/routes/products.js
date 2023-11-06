"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRoutes = void 0;
const express_1 = require("express");
const products = [{ id: 1, title: 'tomato' }, { id: 2, title: 'orange' }];
exports.productsRoutes = (0, express_1.Router)({});
exports.productsRoutes.get('/', (req, res) => {
    if (req.query.title) {
        const title = req.query.title.toString();
        res.send(products.filter(el => el.title.indexOf(title) !== -1));
    }
    else {
        res.send(products);
    }
});
exports.productsRoutes.get('/:id', (req, res) => {
    const product = products.find(p => p.id === +req.params.id);
    if (product) {
        res.send(product);
    }
    else {
        res.status(404).send('Product not found :(');
    }
});
exports.productsRoutes.post('/', (req, res) => {
    const newProduct = {
        title: req.body.title,
        id: +(new Date())
    };
    products.push(newProduct);
    res.status(201).send(newProduct);
});
exports.productsRoutes.put('/:id', (req, res) => {
    const productId = products.findIndex(el => el.id === +req.params.id);
    if (productId !== -1) {
        products[productId].title = req.body.title;
        res.status(201).send(products[productId]);
    }
    else {
        res.status(404).send('Product with this id does not exist :(');
    }
});
exports.productsRoutes.delete('/:id', (req, res) => {
    const productId = products.findIndex(el => el.id === +req.params.id);
    if (productId !== -1) {
        products.splice(productId, 1);
        res.sendStatus(204);
    }
    else {
        res.status(404).send('Product with this id does not exist :(');
    }
});
