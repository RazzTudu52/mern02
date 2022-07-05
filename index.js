const express = require('express');
const cors = require('cors');   // Wabsite connection
const app = express();
require('./db/config'); // conncetion to data base
const User = require('./db/User');  // database 
const Product = require('./db/Product'); // Database


app.use(express.json());
app.use(cors());

//POST
app.post("/post",async(req,res)=>{
    let user = new User(req.body);
    let result =await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
    
})

app.post("/login",async (req,resp)=>{
    console.log(req.body)
    if(req.body.password && req.body.email)
    {
    let user =await User.findOne(req.body).select("-password");
    if(user){
        resp.send(user);
    }else{
        resp.send({result:'no user found'});
    }
    }else{
        resp.send({result:'No user Found'})
    }

})


app.post('/add-product',async(req,resp)=>{
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
    })


app.get('/produucts',async (req,resp)=>{
    let products = await Product.find();
    if(products.length>0){
        resp.send(products);
    }

})    

app.delete('/product/:id', async (req,resp)=>{
    const result = await Product.deleteOne({_id:req.params.id})
    resp.send(result);
})



app.get('/', (req,res)=>{
    res.send("App is Working...");
})





//lisning

app.listen(5000,()=>{
    console.log(`port no 5000`);
})





// app.get('/', (req,res)=>{
//     res.send("App is Working...");
// })
// const connectDB = async () => {
//     mongoose.connect('mongodb://localhost:27017/CWRazz');
//     const productSchema = new mongoose.Schema({});
//     const mobileCollection = mongoose.model('workingrazzs',productSchema);
//     const data = await mobileCollection.find();
//     console.warn(data);
// }

// connectDB();