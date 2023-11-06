"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRoutes = void 0;
const express_1 = require("express");
const repositories_1 = require("../repositories");
exports.addressesRoutes = (0, express_1.Router)({});
exports.addressesRoutes.get('/', (req, res) => {
    res.send(repositories_1.addressesRepository.getAddresses());
});
exports.addressesRoutes.get('/:id', (req, res) => {
    const address = repositories_1.addressesRepository.getAddressesById(+req.params.id);
    if (address) {
        res.send(address);
    }
    else {
        res.status(404).send('Sorry address does not exist :(');
    }
});
