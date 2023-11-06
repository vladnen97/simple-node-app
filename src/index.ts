import express, {Application, Request, Response} from 'express'
import {productsRoutes} from './routes'
import {run} from './repositories'

const app: Application = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use('/products', productsRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

const startApp = async () => {
    await run()
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}

startApp()

export default app;
