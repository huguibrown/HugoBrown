const { json } = require("express");
const express = require("express");
const app = express();
const path = require("path")
const PORT = 8080
const manager = require ("./classContenedor")

//RUTA "/"
app.get("/", (req,res)=> {
    res.send ('<h1 style:"red">Bienvenidos</h1>')
})

//RUTA /PRODUCTS QUE MUESTRE LOS PRODUCTOS TXT
app.get("/productos", (req,res)=>{
    res.sendFile (path.join(__dirname + "/products.txt"));
})
//PRODUCTOS RANDOM
const random = () => Math.floor(Math.random())
const data = ('/products.txt');
const state = {
    randomFav :null,
    favourites:data
}

app.get("/productosRandom", async (req,res)=>{
    let limit = req.query.limit;
    const products = await manager.getProducts;
    if (!limit){
        return res.json(products);
    }
    limit = limit<products.length ? limit: products.length;
    const arr = [];
    for (let i=0;i< limit; i++){
        arr.push(products[i]);
    }
    return res.json(arr);
})

app.listen (8080, ()=> {
    console.log("server running")
})


