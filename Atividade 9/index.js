var n1= prompt("Digite seu saldo:")
var n2= prompt("Digite o valor da sua compra:")
if(_n1=>n2){
    alert(`A compra ocorreu corretamente! O seu saldo atual é de ${n1-n2}`)
} else if(n2<n1){
    alert(`saldo insuficiente`)
}
let n4= prompt("Digite um número")
let n5= prompt("Digite outro número")
let n6= prompt("um caracter Digite um caracter (“+”, “-”, “*” ou “/”)")
if (n6=='*'){
    alert(`${n4*n5}`)
}
else if (n6=='+'){
    alert(`${n4+n5}`)
}
if (n6=='-'){
    alert(`${n4-n5}`)
}
else (n6=='/');{
    alert(`${n4/n5}`)
}
let nt= Number(prompt("salário de um colaborador"))
 op= nt * 0.20
pl = nt * 0.15
vur = nt * 0.10
g = nt * 0.05
if (nt<=280){
    alert(`Salário antes do reajuste ${nt} Salário depois do reajuste ${nt+op} valor do aumento ${op}`)
}
else if(nt>281 && nt<700){
    alert(`Salário antes do reajuste ${nt} Salário depois do reajuste ${nt+pl} valor do aumento ${pl}`)

}
else if(nt>700 && nt<1500){
    alert(`Salário antes do reajuste ${nt} Salário depois do reajuste ${nt+vur} valor do aumento ${vur}`)
}
else (nt>=1501);{
    alert(`Salário antes do reajuste ${nt} Salário depois do reajuste ${nt+g} valor do aumento ${g}`)
}
let ol= prompt("Digite um lado de um triângulo:")
let hj= prompt("Digite outro lado de um triângulo:")
let jh= prompt("Digite outro lado de um triângulo:")
if (hj+jhP || hj> ol+jh || jh> ol+hj ){
    alert("Não é um triângulo")
}
else if(ol==hj==jh){
    alert("Este triângulo é equilatero")
}
else if(ol==hj || ol==jh || hj==jh){
    alert("Este triângulo é isósceles")
}
else(ol!==hj!==jh);{
    alert("Este triângulo é Escaleno")
}

