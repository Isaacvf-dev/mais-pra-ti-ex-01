//Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')()

let numberX10 = Number(prompt('Digite o número para ser repetido 10 vezes: '))

for( let i = 0; i < 10; i++ ) {
  console.log(numberX10)
}