// Express is a framework which we are using with node js in order to create API
// API : it can be a URL, which handles request from the client and response from the server

// we need this express inside our file(App.js)
// Require and modules are the part of ES6
const express = require('express');
const products = require('./product')
//console.log("This is my Product", products);

// we need to create an App instance
const app = express()

// we have to enable app.use() before we use post request
// thos will tell us that our sever will be using json format
// method to allow the req coming to server in JSON fprmat
app.use(express.json());

// defining the first api with request
// get request we use to send the data
app.get('/data', (req, res) =>{
    //res.send(products)
    res.json({
        message : "This is response from server",
        products
    })
})



// post request is used for getting the data from client and doing something
// why we are using Post req : because client will be sending some useful info in the request
// we are going to take the data from client and update the database
// our id field is auto incremented, so client will not send the id, 
// example : the client will be sending a data of name, after that we will add this name to our database
// whenever client sends a useful info that will be presenet inside req.body
app.post('/addProducts', (req, res) =>{
    console.log(req.body, "This is coming from client request");
    let name = req.body.name

    // res.send("got the data")

    if(!name){
        return res.json({
            message: "name does not exist..."
        })
    }

    // but if name is there, so we have  to add that name to our database with id
    let obj = {
        name : name, 
        id : products.length +1
    }
    products.push(obj);
    res.json({
        message : "Data inserted successfully",
        products
    })
})



const port = 5000;

app.listen(port, () => {
    console.log("server is running...");
})