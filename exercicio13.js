// 13. Funcionamento da Loja 
/*Uma loja funciona apenas de segunda a sexta-feira, no horário das 8h às 18h. 
Crie um programa que receba o dia da semana e a hora atual (número inteiro) e informe se a loja está aberta ou fechada.*/


var dia = "segunda-feira"
var horario = 10 

if (dia !== "sabado" && dia !== "domingo" && horario > 8 && horario < 18){
    console.log("Loja aberta")
}else {
    console.log("Loja fechada")
}