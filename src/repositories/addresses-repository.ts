const addresses = [{id: 1, value: 'Nezalejnosti 12'}, {id: 2, value: 'Selisckaya 11'}]

export const addressesRepository = {
    getAddresses() {
        return addresses
    },
    getAddressesById(id: number) {
        return addresses.find(el => el.id === id)
    }
}