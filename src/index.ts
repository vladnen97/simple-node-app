import express, {Request, Response, Application} from 'express'

const app: Application = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}]
const addresses = [{id: 1, value: 'Nezalejnosti 12'}, {id: 2, value: 'Selisckaya 11'}]
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.get('/products', (req: Request, res: Response) => {
     if (req.query.title) {
         const title = req.query.title.toString()
         res.send(products.filter(el => el.title.indexOf(title) !== -1))
     } else {
         res.send(products)
     }
})
app.get('/products/:id', (req: Request, res: Response) => {
    const product = products.find(p => p.id === +req.params.id)

    if (product) {
        res.send(product)
    } else {
        res.status(404).send('Product not found :(')
    }
})

app.get('/addresses', (req: Request, res: Response) => {
    res.send(addresses)
})
app.get('/addresses/:id', (req: Request, res: Response) => {
    const address = addresses.find(el => el.id === +req.params.id)
    if (address) {
        res.send(address)
    } else {
        res.status(404).send('Sorry address does not exist :(')
    }
})

app.delete('/products/:id', (req: Request, res: Response) => {
    const productId = products.findIndex(el => el.id === +req.params.id)
    if (productId !== -1) {
        products.splice(productId, 1)
        res.sendStatus(204)
    } else {
        res.status(404).send('Product with this id does not exist :(')
    }
})
app.post('/products', (req: Request, res: Response) => {
    const newProduct = {
        title: req.body.title,
        id: +(new Date())
    }
    products.push(newProduct)
    res.status(201).send(newProduct)
})

app.put('/products/:id', (req: Request, res: Response) => {
    const productId = products.findIndex(el => el.id === +req.params.id)
    if (productId !== -1) {
        products[productId].title = req.body.title
        res.status(201).send(products[productId])
    } else {
        res.status(404).send('Product with this id does not exist :(')
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})