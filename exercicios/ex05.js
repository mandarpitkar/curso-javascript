function isTruthy (dado) {
    return !!dado
}
    console.log(isTruthy(23))


function perimetroQuadrado(lado) {
    //return lado * 4
    return lado + (lado * 3)
} 
    console.log(perimetroQuadrado(2))

function nomeCompleto(nome, sobrenome){
    return nome + ' ' + sobrenome
}
console.log(nomeCompleto('Mandar', 'Pitkar'))

function isEven (numero) {
    var modulo = numero % 2
    if(modulo == 0) {
        console.log('Par')
    } else {
        console.log('Impar')
    }  
}
console.log(isEven(7))

function tipoDeDado(dado) {
    return typeof dado
}
console.log(tipoDeDado(5-5))