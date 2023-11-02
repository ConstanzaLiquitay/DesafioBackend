import { PRODUCTOS_JSON, PORT } from './config';
import express from 'express';
import { ProductManager } from '../ProductManager.js'

const pm = new ProductManager(PRODUCTOS_JSON);
const app = express()

app.get('/productos', async (req, res) => {

    try {
        const productos = await pm.getAll()
        res.json(productos)
    } catch (error) {
        res.json({
            status: 'error',
            message : error.message
        })
    }

})

app.listen(PORT, () => {
    console.log('conectados al puerto ${PORT}');
})