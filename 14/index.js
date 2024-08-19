//Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require('prompt-sync')()

let numberFactorial = Number(prompt('Digite um número: '))
let result = 1

if(numberFactorial === 0) {
  result = 1
}

for(let i = 1; i <= numberFactorial; i++) {
  result *= i  
}

console.log(`O fatorial de ${numberFactorial} é ${result}`)