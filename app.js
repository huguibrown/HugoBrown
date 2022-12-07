const express = require('express')
const ProductManager = require('./classContenedor.js')
const app = express();
const PORT = 8080;


const server = app.listen(process.env.PORT || PORT,()=> {
    console.log ('server running')
})

server.on('error', err => console.log('error'))

const products = new ProductManager('./products.txt')

app.get ('/productos', async(req,res)=>{
    const productos = await products.getProduct();
    res.send(productos);
})


app.get ('/productosRandom',async (req,res)=> {
    const productos = await products.getProduct();
    let numeroRandom = Math.floor (Math.random() * productos.length);
    res.send(productos[numeroRandom])
})
