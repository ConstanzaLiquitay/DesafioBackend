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

app.get('/productos', async (req, res) => {
const title = (req.query.titile)
    try {
        const productos = await pm.getAll({ title })
        res.json(productos)
    } catch (error) {
        res.json({
            status: 'error',
            message : error.message
        })
    }

})

app.get('/productos/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const productos = await pm.getById(id)
        res.json(productos)
    } catch (error) {
        res.json({
            status: 'error',
            message : error.message
        })
    }

})

app.listen(PORT, () => {
    console.log(`conectado al puerto ${PORT}`);
})