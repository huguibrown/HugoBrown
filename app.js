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

/*const { json } = require("express");
const fs = require('fs')
const express = require("express");
const app = express();
const path = require("path");
const ProductManager = require("./classContenedor");
const PORT = 8080
const manager = require ("./classContenedor");
const { resourceLimits } = require("worker_threads");
const fileName = "./products.txt"
const format = "utf-8"
const products = fs.readFileSync(fileName, format)
const parsedProducts = JSON.parse(products)


//RUTA "/"
app.get("/", (req,res)=> {
    res.send ('<h1 style:"red">Bienvenidos</h1>')
})

//RUTA /PRODUCTS QUE MUESTRE LOS PRODUCTOS TXT
app.get("/productos", (req,res)=>{
    res.sendFile (path.join(__dirname + "/products.txt"));
})

//PRODUCTOS RANDOM
app.get('/productsRandom', async (req, res) => {
    const productAleatorio = req.params.al
    const parsedProducts = JSON.parse(products)
    const product = parsedProducts.length(product => product.id == productID)

    
}
)


app.listen (8080, ()=> {
    console.log("server running")
})

*/
