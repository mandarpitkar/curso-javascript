console.log(`"Numeros:`)
var idade = 1
console.log(idade)
var idade1 = 30 + 6
console.log(idade1)
var idade2 = 3e1 //e significa zero e1=um zero, e5=cinco zeros...
console.log(idade2)
var idade3 = 3e1 + 6
console.log(idade3)
var idade4 = 36.5
console.log(idade4)
var idade5 = 36e-2 // e menos zero=.+numero, 1e-1=0.1, 25e-1=2.5, 25e-3=0.025. 
console.log(idade5)
var idade6 = 400e-1 - 4
console.log(idade6)

console.log(`"Operadores Aritmeticos:`)
var soma = 10 + 10
console.log(soma)

var subtracao = 20 - 10
console.log(subtracao)

var multiplicacao = 100 * 2
console.log(multiplicacao)

var divisao = 100 / 2
console.log(divisao)

var expoente = 2 ** 4 // 2*2*2*2 = 16
console.log(expoente)

var modulo = 14 % 5 // resto do divisao 14 /5 = (5*2=10) (14-10) = 4
console.log(modulo)

console.log(`"Operadores Aritmeticos (String)"`)
console.log( '5' + '5') // *soma(+) em string serve para concatenar '5'+'5'=55 (nao eh 10) 
console.log('5' - 2) // resulto string/numero menos string/numero = numero
console.log('5'*'5') // resulto string/numero multipla com string/num = numero
console.log(10/ '2') // resulto string/num divido com num/string = numero
console.log('comprei 10' / 2) // caracter com numero resulto NaN(Not a Number) 

console.log(`"Eh possivel verificar se uma var eh NaN ou nao com a "funcao isNaN()"`)

var testeNaN = 'comprei100' / 2
console.log(testeNaN)
console.log(isNaN(testeNaN))

var testNaN = '100' / 2
console.log(testNaN)
console.log(isNaN(testNaN))




