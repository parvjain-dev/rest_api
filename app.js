const express = require("express");
const app = express();

//setting up database
const connectDB = require("./db/connect")


const PORT = process.env.PORT || 3000;

//now we have to import routes here
const products_route = require("./routes/products");

app.get("/",(req,res)=>{
    res.send("Hi, I am live");
});

//to use router and controllers we use middleware or to set router
app.use("/api/products",products_route)

const start = async ()=>{
    try {
        await connectDB();
        app.listen(PORT ,()=> {
           console.log( `I am live at ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};
start();