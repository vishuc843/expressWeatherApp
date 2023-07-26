const express=require("express")
const app=express()
const fs=require("fs")
const hbs=require("hbs")
const path=require("path")
const port=process.env.PORT || 8000

//static for css
const staticPath=path.join(__dirname, "../public")
app.use(express.static(staticPath))
const templatePath=path.join(__dirname, "../templates/views")
const partialPath=path.join(__dirname, "../templates/partials")
app.set("view engine", "hbs")
app.set("views",templatePath)

hbs.registerPartials(partialPath)


app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render("404",{
        errorMsg: "Oops! Page Not Found"
    })
})

app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})