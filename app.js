const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("Hi, I am live");
});

const start = async ()=>{
    try {
        app.listen(PORT ,()=> {
           console.log( `I am live at ${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};
start();