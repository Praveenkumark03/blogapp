//require express,mongoosde,Body-parser
const e = require('express')
const m =require('mongoose')
const bodyparser=require('body-parser')
//const r=require('./route/userrouter')r
const router = require('./route/userrouter')
//app express
const app=e()
app.use(bodyparser.json())
app.use (router)
//database connction
m.connect("mongodb+srv://praveenrainak:mypassword@cluster2.pafs1de.mongodb.net/project?retryWrites=true&w=majority")
.then((result)=>{
console.log("Database connected");
})
.catch((err)=>{
    console.log(err);
})

app.get('/',(req,res)=>{
    res.end("hello world");
})
const port=2000;

app.listen(port,()=>
{
    console.log("app listening port http://localhost:"+port);
})
