import {ProductModel} from '../repositories/types';
import {productsRepository} from '../repositories';

export const productsService = {
    async findProducts(title?: string): Promise<ProductModel[]> {
        return productsRepository.findProducts(title)
    },
    async findProductById(id: number): Promise<ProductModel | null> {
        return productsRepository.findProductById(id)
    },
    async createProduct(title: string): Promise<ProductModel> {
        const newProduct: ProductModel = {id: +(new Date()), title}

        return productsRepository.createProduct(newProduct)
    },
    async updateProductById(id: number, title: string): Promise<ProductModel | null> {
        return productsRepository.updateProductById(id , title)
    },
    async deleteProductById(id: number): Promise<ProductModel['id'] | null> {
        return productsRepository.deleteProductById(id)
    }
}
