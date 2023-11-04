const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]

export const productsRepository = {
    findProducts(title?: string) {
        if (title) {
            return products.filter(el => el.title.indexOf(title) !== -1)
        } else {
            return products
        }
    },
    findProductById(id: number) {
        return products.find(p => p.id === id)
    },
    createProduct(title: string) {
        const newProduct = {id: +(new Date()), title}

        products.push(newProduct)

        return newProduct
    },
    updateProductById(id: number, title: string) {
        const productId = products.findIndex(el => el.id === id)
        if (productId !== -1) {
            products[productId].title = title
            return products[productId]
        }
    },
    deleteProductById(id: number) {
        const productId = products.findIndex(el => el.id === id)
        if (productId !== -1) {
            products.splice(productId, 1)
            return productId
        }
    }
}
