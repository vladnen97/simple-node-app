import {Request, Response, Router} from 'express';
import {productsRepository} from '../repositories/products-repository';


export const productsRoutes = Router({})

productsRoutes.get('/', (req: Request, res: Response) => {
    const products = productsRepository.findProducts(req.query.title?.toString())

    res.send(products)
})
productsRoutes.get('/:id', (req: Request, res: Response) => {
    const product = productsRepository.findProductById(+req.params.id)

    if (product) {
        res.send(product)
    } else {
        res.status(404).send('Product not found :(')
    }
})
productsRoutes.post('/', (req: Request, res: Response) => {
    if (req.body.title) {
        const newProduct = productsRepository.createProduct(req.body.title)
        res.status(201).send(newProduct)
    } else {
        res.status(404).send('title is required')
    }

})
productsRoutes.put('/:id', (req: Request, res: Response) => {
    const product = productsRepository.updateProductById(+req.params.id, req.body.title)

    if (product) {
        res.status(201).send(product)
    } else {
        res.status(404).send('Product with this id does not exist :(')
    }
})
productsRoutes.delete('/:id', (req: Request, res: Response) => {
    const productId = productsRepository.deleteProductById(+req.params.id)

    if (productId !== undefined) {
        res.sendStatus(204)
    } else {
        res.status(404).send('Product with this id does not exist :(')
    }
})
