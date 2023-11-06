"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRoutes = void 0;
const express_1 = require("express");
const addresses = [{ id: 1, value: 'Nezalejnosti 12' }, { id: 2, value: 'Selisckaya 11' }];
exports.addressesRoutes = (0, express_1.Router)({});
exports.addressesRoutes.get('/', (req, res) => {
    res.send(addresses);
});
exports.addressesRoutes.get('/:id', (req, res) => {
    const address = addresses.find(el => el.id === +req.params.id);
    if (address) {
        res.send(address);
    }
    else {
        res.status(404).send('Sorry address does not exist :(');
    }
});
