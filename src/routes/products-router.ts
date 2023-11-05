import {Request, Response, Router} from 'express';
import {productsRepository} from '../repositories';
import {body} from 'express-validator';
import {inputValidationMiddleware} from '../middlewares/input-validation-middleware';

export const productsRoutes = Router({})

const titleValidationChain = () => body('title').trim().notEmpty().withMessage('title is required')

productsRoutes.get('/', async (req: Request, res: Response) => {
    const products = await productsRepository.findProducts(req.query.title?.toString())

    res.send(products)
})
productsRoutes.get('/:id', async (req: Request, res: Response) => {
    const product = await productsRepository.findProductById(+req.params.id)

    if (product) {
        res.send(product)
    } else {
        res.status(404).send('Product not found :(')
    }
})
productsRoutes.post('/', titleValidationChain(), inputValidationMiddleware, async (req: Request, res: Response) => {
    const newProduct = await productsRepository.createProduct(req.body.title)
    res.status(201).send(newProduct)
})
productsRoutes.put('/:id', titleValidationChain(), inputValidationMiddleware, async (req: Request, res: Response) => {
    const product = await productsRepository.updateProductById(+req.params.id, req.body.title)

    if (product) {
        res.status(201).send(product)
    } else {
        res.status(404).send('Product with this id does not exist :(')
    }
})
productsRoutes.delete('/:id', async (req: Request, res: Response) => {
    const productId = await  productsRepository.deleteProductById(+req.params.id)

    if (productId !== null) {
        res.sendStatus(204)
    } else {
        res.status(404).send('Product with this id does not exist :(')
    }
})
