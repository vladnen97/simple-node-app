const products: ProductModel[] = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]

type ProductModel = {
    id: number
    title: string
}

export const productsRepository = {
    async findProducts(title?: string): Promise<ProductModel[]> {
        if (title) {
            return products.filter(el => el.title.indexOf(title) !== -1)
        } else {
            return products
        }
    },
    async findProductById(id: number): Promise<ProductModel | undefined> {
        return products.find(p => p.id === id)
    },
    async createProduct(title: string): Promise<ProductModel> {
        const newProduct = {id: +(new Date()), title}

        products.push(newProduct)

        return newProduct
    },
    async updateProductById(id: number, title: string):Promise<ProductModel | undefined> {
        const productId = products.findIndex(el => el.id === id)
        if (productId !== -1) {
            products[productId].title = title
            return products[productId]
        }
    },
    async deleteProductById(id: number): Promise<ProductModel['id'] | undefined> {
        const productId = products.findIndex(el => el.id === id)
        if (productId !== -1) {
            products.splice(productId, 1)
            return productId
        }
    }
}
