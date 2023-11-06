import {productsCollection} from './db';
import {ProductModel} from './types';

export const productsRepository = {
    async findProducts(title?: string): Promise<ProductModel[]> {
        const filter: any = {}

        if (title) {
            filter.title = {$regex: title}
        }
        return productsCollection.find(filter).toArray()
    },
    async findProductById(id: number): Promise<ProductModel | null> {
        return productsCollection.findOne({id})
    },
    async createProduct(product: ProductModel): Promise<ProductModel> {
        await productsCollection.insertOne(product)
        return product
    },
    async updateProductById(id: number, title: string): Promise<ProductModel | null> {
        const result = await productsCollection.updateOne({id}, {$set: {title}})

        if (result.matchedCount === 1) {
            return  productsCollection.findOne({id})
        } else {
            return null
        }
    },
    async deleteProductById(id: number): Promise<ProductModel['id'] | null> {
        const result = await productsCollection.deleteOne({id})

        return result.deletedCount === 1 ? id : null
    }
}
