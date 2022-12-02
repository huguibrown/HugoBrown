const express = require("express");
const app = express();
const path = require("path")


app.get("/productos", (req,res)=>{
    res.sendFile (path.join(__dirname + "/productos.txt"));
})

app.listen(8080, ()=> {
    console.log ("servidor running")
})

app.get("/", (req,res)=>{
    res.sendFile (path.join(__dirname + "/classContenedor"));
})