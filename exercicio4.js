//4. Pode Dirigir? (&&) 
/*Crie uma função que receba a idade de uma pessoa e uma variável booleana temCarteira. 
A função deve retornar true apenas se a idade for maior ou igual a 18 e temCarteira for true.*/

var idade = 16
var temCarteira = false

if (idade >= 18 && temCarteira == true){
    console.log("É maior de 18 anos e tem carteira")
} else {
    console.log("Não pode dirigir")
}

