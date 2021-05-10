const express=require("express");
const app=express();

app.get("/", function(req, res){
    console.log(req);
    res.sendFile(__dirname + "/index.html")
});

app.get("/saludo", function (req, res) {
    console.log(req);
    res.send("Holaaa"); 
});

app.get("/foto", function (req, res) {
    console.log(req);
    res.sendFile(__dirname + "/babyyoda.gif");   
});

app.listen(4042)