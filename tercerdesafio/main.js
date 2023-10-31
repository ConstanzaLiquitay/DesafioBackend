import express from 'express';

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