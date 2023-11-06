"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addressesRepository = void 0;
const addresses = [{ id: 1, value: 'Nezalejnosti 12' }, { id: 2, value: 'Selisckaya 11' }];
exports.addressesRepository = {
    getAddresses() {
        return addresses;
    },
    getAddressesById(id) {
        return addresses.find(el => el.id === id);
    }
};
