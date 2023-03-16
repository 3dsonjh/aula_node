// funções
// E -> P -> S

var num1 = 10;
var num2 = 4;

function soma(num1, num2){
    var resultado = num1 + num2;
    return resultado;
}

var res = soma(2,3);
console.log(res);

var num3 = 5;
var num4 = 6;

function sub(num1, num2){
    return num3 - num4;
}

console.log(sub(9,8));

var mult = function(num1, num2){
    return num1 * num2;
}

console.log(mult(2,3));

function calculadora(num1, num2, oper){
    // oper -> callback
    return oper(num1,num2);
}

console.log( calculadora(2,3,mult));

//funcao para se importada
modules.exports = mult;