import {Request, Response, Router} from 'express';
import {productsRepository} from '../repositories';
import {body} from 'express-validator';
import {inputValidationMiddleware} from '../middlewares/input-validation-middleware';


export const productsRoutes = Router({})

const titleValidationChain = () => body('title').trim().notEmpty().withMessage('title is required')

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

productsRoutes.post('/', titleValidationChain(), inputValidationMiddleware, (req: Request, res: Response) => {
    const newProduct = productsRepository.createProduct(req.body.title)
    res.status(201).send(newProduct)
})

productsRoutes.put('/:id', titleValidationChain(), inputValidationMiddleware, (req: Request, res: Response) => {
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
