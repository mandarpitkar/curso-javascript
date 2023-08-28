function ladoQuadrado(lado) {
    return lado * lado
}
console.log(ladoQuadrado(10))

function pi() {
    return 3.14
} 
    var total = 5 * pi()
    console.log(`Total eh ${total}`)

function imc(peso, altura, sexo) {
    var imc = (peso / (altura * altura)), sexo
    return imc
}
console.log(imc(80,1.8))

var peso = 105
var altura = 1.8
var imc = peso / (altura ** 2)
/*Menor do que 18,5	Abaixo do peso
Entre 18,5 e 24,9	Peso normal
Entre 25 e 29,9	Acima do peso (sobrepeso)
Entre 30 e 34,9	Obesidade I
Entre 35 e 39,9	Obesidade II
Maior do que 40	Obesidade III 
if (imc < 18.5){
    console.log('Abaixo do peso')
} else if(imc <= 24.90) {
    console.log('Peso normal')
} else if (imc <= 29.90) {
    console.log('Acima do peso(sobrepeso)')
} else if (imc >= 30) {
    console.log('Obesidade')
}*/

function corFavorita(cor) {
    if (cor === 7){
        return ('Olha para o Ceu')
    } else if (cor === 'Amarelo'){
        return('Olha para o Sol')
    } else if (cor === 'Verde') {
        return('Olha para Floresta')
    } else {
        return('Voce nao gosta de cores')
    }
}
    console.log(corFavorita(7))

    function mostrarConsole(){
        return("Oi")
    } console.log(mostrarConsole())
    addEventListener('click', mostrarConsole())




