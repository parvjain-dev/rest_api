const mongoose = require("mongoose");

uri = "mongodb+srv://parv_jain:PArv1282002@parv.kcftrga.mongodb.net/parv?retryWrites=true&w=majority";

const connectDB =() =>{
    console.log("connect db");

  return mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology:true,

  });
};
module.exports = connectDB;