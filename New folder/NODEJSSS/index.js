import express from "express";
import path from "path";

const app = express();

const users = [];

// poora folder ko detect krwana ka liye 
// Using Middlewares
app.use(express.static(path.join(path.resolve(), "views")))
app.use(express.urlencoded({ extended: true }));

// Setting Up View Engine
app.set("view engine", "ejs");
// app.get("/getproducts",(req,res) => {
    // res.json({
    //     success : true,
    //     products : [],
    // });
    // res.status(400).send("Meri Marzi");



    // Method of creating API:
    app.get("/" , (req,res) => {
        // const pathlocation = path.resolve();
        // // res.sendFile("index");
        // res.sendFile(path.join(pathlocation, "./index.ejs"));
        
        res.render("index.ejs", {name: "Hamza Malik"});    
    })
// new page (url) banana ka liye: 
    app.get("/success" , (req,res) => {
       
  
        res.render("success");    
    })
    // new api create k jis ma hm json from ma data la rha array sa users wali:
    app.get("/users", (req,res)=>{
        res.json({
            users,
        });
    })

// data post krna json from ma when url not defined specific format:
    app.post("/" , (req,res) => {
        console.log(req.body.name);
        users.push({name:req.body.name,email:req.body.email});
        
        // new server side pr la jata hai 
        // res.render("success");
        res.redirect("/success");
    })

app.listen(5000,() => {
    console.log("server is working");
});