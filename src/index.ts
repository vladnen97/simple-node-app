import express, {Application, Request, Response} from 'express'
import {productsRoutes} from './routes';
import {addressesRoutes} from './routes';

const app: Application = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use('/products', productsRoutes)
app.use('/addresses', addressesRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
