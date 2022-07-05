const mongoose = require('mongoose');

const sch= new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

module.exports = mongoose.model('users',sch);

// const sch={
//     name:String,
//     email:String,
//     password:String
// }
// module.exports = mongoose.model("users",sch);

// const userSchema = mongoose.Schema({
//     local: {
//             username: String,
//             email:String,
//             password: String
//          }
//  });

// module.exports = mongoose.model('users', userSchema);


