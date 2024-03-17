// requisiçoes
const Express = require("express");
const app = Express();
const path = require("path");
const cors = require("cors")

//config

    //ejs
    app.set("view engine", "ejs");

    //arquivos estaticos
    app.use(Express.static(path.join(__dirname + '/source')));

//rotas
app.get("/", function(req,res){

    res.render(path.join(__dirname + "/source/Apresentacao"))
    res.end

});
app.get("/dowload", function(req,res){

    res.download(path.join(__dirname + "/Files/01.zip"));

});

//porta
app.listen(3000, console.log("Rodando!"));