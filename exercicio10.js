//10. Regra de Frete Grátis (&&, || e !) 
/*Uma loja online oferece frete grátis se o valorCompra for maior que R$ 100 ou se o cliente for membroVIP. 
No entanto, o frete grátis não se aplica se a entrega for para zonaRural. Crie o programa que retorne se o cliente tem direito ao frete grátis.*/

var valorCompra = 120
var membroVIP = true
var zonaRural = true

if (!zonaRural == true && (valorCompra > 100 || membroVIP == true)){
    console.log("Frete grátis")
} else {
    console.log("Sem frete grátis");
}




