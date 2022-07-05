const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/e-comm',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},(err)=>{
    if(!err)
    {
        console.log("connect to DB");
    }else{
        console.log("error");
    }
})


// SCHEMA
const sch={
    name:String,
    email:String,
    id:Number
}
const monmodel=mongoose.model("users",sch);


//POST
app.post("/post",async(req,res)=>{
    console.log("inside post function");

    const data = new monmodel({
        name:req.body.name,
        email:req.body.email,
        id:req.body.id
    })
    const val = await data.save();
    res.json(val);
    
})



app.get('/', (req,res)=>{
        res.send("App is Working...");
    })
// listen 
app.listen(3000,()=>{
    console.log(`port no 3000`);
})

