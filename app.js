const Express = require("express");
const app = Express();
const path = require("path")


app.get("/inicio", function(req,res){

    res.sendFile(path.join(__dirname + "source"));
    res.write(path.join(__dirname + "source/index.html"));
    res.end;

})