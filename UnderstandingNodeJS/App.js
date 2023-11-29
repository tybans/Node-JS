// to setup a server, i got the express package and then created app object from express function
// this app object is allowing me to set up a server
// this app object is listening to 3000 port from app.listen
const express = require('express')
const app = express()

//  ('/') is the URL for my machine which is localhost and it is Root URL
//  and it contains a function which gets executed
app.get('/', function (req, res) {
  res.send('Hello World')
})

// (app.listen(3000) is the port where my root URL is on the server)
app.listen(3000)



// A server should be able to process a request
// then it should send the response
// that means i should have a Request Object & a kind of Response Object
// so a resquest has two parts - Get/Post/Del and a URL
// based on request URL and the method some code block would be executed to create the response