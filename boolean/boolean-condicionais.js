var possuiGraduacao = false
if(!!possuiGraduacao) {
    console.log('Possui Graduacao')
} else {
    console.log ('Nao possui Graduacao')
}

var possuiGraduacao = false
var possuiDoutorado = false

if (possuiGraduacao) {
    console.log ('Possui Graduacao')
} else if (possuiDoutorado) {
    console.log('Possui Doutorado')
} else {
    console.log('Nao possui nada')
}

var nome = 'Mandar'
  if(nome) {
    console.log(nome)
} else {
    console.log('Nome nao existe!')
} 
//Existem valores que retornam true e outros false quando verificados em uma expressao booleana.
// Falsy
// if (false)
// if (0) ou (-0)
// if (Nan)
// if (null)
// if (undefined)
// if '' , "" , `` (aspas, duplas ou crase sem espaco)

var x = 'Gato'
console.log(x !== 'Gato')

var nome = 'gato'
console.log(nome && 'cao')

var num = 5-5
console.log(num && (5+7)) 

var nome = 'gato'
console.log(nome && false)

var num = 5 >= 5
console.log(num && 3 < 6)

if ((5-5) && (5+5)) {
    console.log('e verdadeiro')
 } else {
    console.log('e falso')
 }

 var nome = true
 console.log(nome == false)

 var corFavorito = 'Verde'
 switch (corFavorito) {
    case 'Azul':
     console.log('Olha para o ceu')
    break
    case "Amarelo":
     console.log('Olha para o sol')
    break
    case 'Vermelho':
     console.log('Fecha um olho')
    break
    case 'Verde':
     console.log('Olha para floresta')  
     break 
    default:
     console.log('Fecha os olhos')
 }