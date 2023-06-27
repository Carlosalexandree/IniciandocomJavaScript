// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

alert("Hello Word!")
// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

let numberOne = 10
let numberTwo = 15

const soma = numberOne + numberTwo
alert(soma)

//3. Crie um script que declare uma variável e 
//verifique se o seu valor é um número. 
//Se for, exiba a mensagem "É um número", 
//caso contrário, exiba a mensagem "Não é um número".
const isNumber = 10

if (typeof  isNumber == 'number') {
  alert('É um número')
}else{
alert('Não é um número')
}
//Crie um script que declare uma variável e verifique se o 
//seu valor é uma string. Se for, exiba a mensagem "É uma string", 
//caso contrário, exiba a mensagem "Não é uma string".

let umaString = 'Isso é uma string'

if (typeof umaString == 'string') {
  alert('É uma string')
}else{
alert('Não é uma string')
}

// Crie um script que declare uma variável e verifique se o 
//seu valor é um booleano. Se for, exiba a mensagem 
//"É um booleano", caso contrário, exiba a mensagem 
//"Não é um booleano".

let umBooleano = true

if (typeof umBooleano == 'umBooleano') {
  alert('É um booleano')
}else{
  alert('Não é um booleano')
}

//Crie um script que declare duas variáveis e exiba o 
//resultado da subtração entre elas.

let numberTree = 9
let numberFour = 5

//Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const subtração = numberTree - numberFour
alert(subtração)

//Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

let numberFive = 5
let numberSix = 5

const multiplicação = numberFive * numberSix
alert(multiplicação)

//Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

let numberSeven = 21
let numberEight = 7

const divisão = numberSeven / numberEight
alert(divisão)

//Crie um script que declare uma variável e verifique 
//se o seu valor é um número par. Se for, exiba a mensagem 
//"É um número par", caso contrário, exiba a mensagem 
//"Não é um número par".

const numberNine = 6

if(numberNine % 2 == 0){
  alert('É um numero par')
}else{
  alert('Não é um numero par')
}

//Crie um script que declare uma variável e verifique se o seu
// valor é um número ímpar. Se for, exiba a mensagem 
//"É um número ímpar", caso contrário, exiba a mensagem 
//"Não é um número ímpar".

const numberten = 5

if(numberten % 2 != 0) {
  alert('É um numero impar')
}else{
  alert('Não é um numero impar')
}