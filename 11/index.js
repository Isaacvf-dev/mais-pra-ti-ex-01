//Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require('prompt-sync')()

let result = 0

for( let i = 1; i <= 5; i++ ) {
  let givenNumber = Number(prompt('Digite um número: '))
  result += givenNumber
}

console.log(`A soma dos números é ${result}`)