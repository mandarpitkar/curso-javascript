//1
var minhaIdade = 36
var idadePrimo = 36
if(minhaIdade < idadePrimo) {
    console.log('Eh Menor')
} else if(minhaIdade===idadePrimo){
    console.log('Eh Igual')
} else {
    console.log('Eh Maior')
}
//1
var idade = 36
if (idade < 36) {
    console.log('Eh Maior')
} else if (idade == 36) {
    console.log('Eh igual')
} else {
    console.log('Eh Menor')
}

//2
var express = ((5<2) && (5 - ' ') && (5-2))
console.log(express)

//3
var nome  = 'Mandar' // truthy
var idade = 36 // truthy
var possuiDoutorado = false
var empregoFuturo;
var dinheiroNaConta = 0
console.log(!!nome, !!idade , !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)
if (dinheiroNaConta) {
 console.log('E truthy')
} else {
    console.log('E falsy')
}

//4
// var brasil = 207
// var india = 1340


//5
if(('gato'==='gato') && (5 > 2)) {
    console.log('Eh Verdadeiro')
} else {
    console.log('Eh Falso')
}