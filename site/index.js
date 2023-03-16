const express = require('express');
const app = express();
//const port = 3000;

app.get("/", function(req, res){
    res.send("Olá Galera!!");
});

app.get("/sobre", function(req, res){
    console.log(req.query);
    res.send("Sobre o sistema, pagina: "+req.query.pagina);
});

app.listen(3000, function(){
    console.log("Servidor Iniciado");
});