console.log(`"A ORDEM eh importa- Comeca com multiplicacao e divisao depois por soma e subtracao = * / + - "`)
console.log(`**Parenteses() para priorizar uma expressao`)

var total1 = 20 + 5 * 2 // 20+(5*2)=20+10=30
var total2 = (20 + 5) * 2 // primeiro()=25*2=50
var total3 = 20 / 2 * 5 // (20/2)*5=10*5=50
var total4 = 10 + 10 * 2 + 20  / 2 //10+(10*2)+(20/2)=10+20+10=40

console.log(total1)
console.log(total2)
console.log(total3)
console.log(total4)

console.log(20 / (5-3))//20/2=10 piorizar parenteses
console.log(10 * (5+2))// priorizar parenteses
console.log(10 + 10 - 20 + 30 * 4 / 2 + 10)

console.log(`"Operadores Aritmeticos Unarios"`)
var incremento = 5
console.log(incremento++)
console.log(incremento)

let x = 1
console.log(x)
console.log(++x)

var frase = 'Isso eh um teste'
console.log(+frase)
console.log(-frase)
console.log(isNaN(frase))

var idade = 36
console.log(++idade * '10')
console.log(--idade)
console.log(isNaN(idade))




