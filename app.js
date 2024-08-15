require('dotenv').config()
const app = require('express')();
const express = require('express')
require('dotenv').config()
const session = require("express-session");

app.use(express.static("public"));


app.use((req, res, next) => {
    if (req.path.slice(-1) === '/' && req.path.length > 1) {
      const query = req.url.slice(req.path.length)
      const safepath = req.path.slice(0, -1).replace(/\/+/g, '/')
      res.redirect(301, safepath + query)
    } else {
      next()
    }
})


app.use("/",express.static("public"));
app.use("/payment/",express.static("public"));
app.use("/confirmwithdraw/",express.static("public"));
const cors = require("cors")
const bodyParser = require("body-parser")
const multer = require("multer")
app.use(bodyParser.json())




//setting express to use  the session
app.use(session({
    secret:"mylittlesecret",
    resave:false,
    saveUninitialized:false,
    name:"precious",
    genid:function(){
        return "prechy"
    },
    cookie:{
        maxAge:7800000000000
    }, 
}))


app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}))
const clientRoutes = require("./routes/client")



//using the routes
app.use(clientRoutes.router)

//error handler //express error middleware
app.use((err,req,res,next)=>{
     console.log(err)
    err.statusCode = err.statusCode || 300
    err.message = err.message 
    res.status(err.statusCode).render("home")
})



app.listen(process.env.PORT||8080,(err)=>{
   console.log(err)
    console.log("sucessfully")
})