import {MongoClient} from 'mongodb'
import {ProductModel} from './types';

// Replace the placeholder with your Atlas connection string
const uri = process.env.mongoURI || 'mongodb://127.0.0.1:27017'

export const client = new MongoClient(uri)

const db = client.db('shop')

export const productsCollection = db.collection<ProductModel>('products')


export async function run() {
    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect()

        // Send a ping to confirm a successful connection
        await client.db('storage').command({ping: 1})
        console.log('You successfully connected to MongoDB!');
    } catch {
        // Ensures that the client will close when you finish/error
        await client.close()
    }
}
