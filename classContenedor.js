const fs = require('fs')

class ProductManager {
    constructor(fileName){
        this.fileName = fileName
        this.format = 'utf-8'
    }

     generateID = async () => {
        const data = await this.getProduct()
        const count = data.length

        if (count == 0) return 1;

        const lastProduct = data[count - 1]
        const lastID = lastProduct.id
        const nextID = lastID + 1

        return nextID
    }

    addProduct = async (title, description, price, thumbnail, stock, code) => {
        const id = await this.generateID()

        return this.getProduct()
            .then(products => {
                products.push({id, title, description, price, thumbnail, stock, code})
                return products
            })
            .then(productsNew => fs.promises.writeFile(this.fileName, JSON.stringify(productsNew)))
    }
    }