// comentario

/*
comentario de multiplas linhas
*/

var nome = "Edir"; 		// string
var idade = 73; 		// number - integer
var peso = 45.7;		// number -float
var acordado = false;	// boolean

console.log("Olá "+nome);

/*
	Comparações
	== 	Igual
	===	Exatamente Igual (valor e tipo)
	!= 	Diferente
	!==	Exatamente Diferente (valor e tipo)
	> 	Maior
	< 	Menor
	>= 	Maior ou Igual
	<= 	Menor ou Igual
	Conectores
	&&	AND -> E
	||	OR	-> OU
*/

if(acordado==false){
	console.log("Acorda aí "+nome);
}

// verificar se a pessoa tem mais de 30 anos e mais de 50 kg
if(idade > 30 && peso>50){
	console.log(nome+" tem mais de 30 anos e mais de 50kg");
} else {
	console.log(nome+" NÃO tem mais de 30 anos e mais de 50kg");
}

// Contar de 1 a 10

console.log("Contar de 1 a 10 com while");
var ini=1;
while (ini<=10){
	console.log("Número "+ini);
	ini++;
}

console.log("Contar de 1 a 10 com do while");
var ini=1;
do{
	console.log("Número "+ini);
	ini=ini+1;
}while (ini<=10)

console.log("Contar de 1 a 10 com for");
for(var ini=1; ini<=10; ini=ini+1){
	console.log("Número "+ini);
}

//formar de incremento/decremento
// ini=ini+1
// ini+=1
// ini++

// Contar de 10 a 1

console.log("Contar de 10 a 1 com while");
var ini=10;
while (ini>0){
	console.log("Número "+ini);
	ini=ini-1;
}

console.log("Contar de 10 a 1 com do while");
var ini=10;
do{
	console.log("Número "+ini);
	ini=ini-1;
}while (ini>0)

console.log("Contar de 10 a 1 com for");
for(var ini=10; ini>0; ini=ini-1){
	console.log("Número "+ini);
}


var vazio = "";
var zero  = 0
var nada; //null

//if(vazio == nada){ // resultado false
//if(nada == null){  // resultado true
//if(vazio == zero){ // resultado true
//if(zero == false){ // resultado true
//if(vazio == false){ // resultado true
if(vazio === zero){  // resultado false
	console.log("passou");
} else {
	console.log("não passou");
}


//vetores (arrays)
//estrutura de dados

var cidades = ["Curitiba", "Colombo", "Pinhais"];

//console.log(cidades); //imprime todo vetor
//console.log(cidades[1]); //imprime cidade no índice 1

cidades.push("Araucária");

console.log(cidades);


//executar
// node nome_do_arquivo.js










