//Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
const prompt = require('prompt-sync')()
let testNumber = Number(prompt('Insira o número: '))

testNumber % 2 === 0 ? 
  console.log(`O número ${testNumber} é par`) : 
  console.log(`O número ${testNumber} é ímpar`)
