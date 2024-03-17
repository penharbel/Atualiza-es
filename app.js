// requisiçoes
const Express = require("express");
const app = Express();
const path = require("path");
const cors = require("cors")

//arquivos estaticos
app.use(Express.static(path.join(__dirname + '/source')));

//rotas
app.get("/inicio", function(req,res){

    res.sendFile(path.join(__dirname + "/source/index.html"));
    res.end;

});
app.get("/dowload", function(req,res){

    res.download(path.join(__dirname + "/Files/01.zip"));

});

//porta
app.listen(3000, console.log("Rodando!"));