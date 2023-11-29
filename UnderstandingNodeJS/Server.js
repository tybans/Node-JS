const express = require("express")
const app = express()

products = [
    {
        name: "Oppo F19",
        price: 20000
    },
    {
        name: "Dell Inspiron",
        price: 60000
    }
]

app.get('/', function (req, res) {
    res.send("Welcome to Backend")
})

// for this the URL would be localhost:3000/products
app.get('/products', function(req, res){
    res.send(products)
})
app.listen(3001, ()=>{
    console.log("Server is running in 3001 Port");
})