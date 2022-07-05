const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/e-comm")
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://razztudu52:RazzTudu5267890@cluster0.bpfil.mongodb.net/e-comm',{
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