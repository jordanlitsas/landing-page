var express = require("express")
var app = express()
app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.listen(3000,()=>{
    console.log("App listening to port: 3000");
});