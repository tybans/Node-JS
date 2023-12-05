const express = require('express');
const morgan = require('morgan');
const Products = require('./product')
const app = express();
// enable
app.use(express.json());
app.use(morgan());
const Port = 5000;

app.get('/product', (req, res) =>{
    res.json({
        message : "Data is given to you",
        product : Products
    })
})


app.post('/addProduct', (req, res) =>{
    console.log(req.body, "This is coming from client request");

    let {product_name, product_details, product_img, price_per_qnty, total_qnty, product_color, category, Ratings, brand, featured, comments, discount, discount_value_per_qnty, best_sellers} = req.body;

    // making an object of the key i got from req.body because we have to push this value inside our products array
    let newObj ={
        id: Products.length+1, 
        product_name, 
        product_details, 
        product_img, 
        price_per_qnty, 
        total_qnty, 
        product_color, 
        category, 
        Ratings, 
        brand, 
        featured, 
        comments, 
        discount, 
        discount_value_per_qnty, 
        best_sellers
    };
    Products.push(newObj);
    res.json({
        message :"Product added successfully...",
        product : Products
    })

});


app.put('/updateProduct/:id', (req, res) =>{
    // any function which handles request and response body for us, they are known as middleware function inside express

    // update our product inside our array based on id
    // parameters : param
    // anything in 'colon' treated as parameters
    // to handle them we use "req.param", Not req.body
    let {id} = req.params;
    id = parseInt(id);
    console.log(id,"id from param");
    let {product_name} = req.body

    // finding the product inside our array based on id
    let isProduct = Products.find(product => product.id === id);
    if(!isProduct){
        return res.json({
            message: "Product is not there..."
        })
    }
    // if product is there then update the isProduct.product_name to the name we are passing in the req.body
    isProduct.product_name = product_name
    return res.json({
        message:"Product Updated",
        product : Products
    })
})


app.listen(Port, () =>{
    console.log("Server is running...");
})
