const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')


const Article = require("./models/Article")

mongoose.connect("mongodb+srv://melihnode:meliherpek1@cluster0.g1oel.mongodb.net/todoapp?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true},
(err) =>{ if(err) { throw err} console.log("mongoose ile bağlantı kuruldu")}
   
);

app.set("view engine","ejs")
app.use(bodyParser.urlencoded({ extended: false }))
app.use("/assets",express.static("assets"))



app.get("/",(req,res)=>{
    
        Article.find((err,docs)=>{
            if(err)throw err
            res.render("index",{data:docs})
        })
    })
     


app.post("/",(req,res)=>{
    
    var yeniToDo= new Article({
    content:req.body.txtTaskName
    })
        yeniToDo.save()
        res.redirect("http://localhost:3000")
    })
    
  
    

app.listen(3000)