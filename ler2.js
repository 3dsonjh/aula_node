// usa o modulo csv

const csv = require('node-csv').createParser();

csv.parseFile("alunos.csv",function(erro, val){
    if(erro){
        console.log(erro);
    }
    console.log(val);
});