//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require('prompt-sync')()

let firstValue = Number(prompt('Digite o primeiro valor: '))
let secondValue = Number(prompt('Digite o segundo valor: '))

if( firstValue > secondValue ) {
  console.log(`${secondValue}, ${firstValue}`)
} else {
  console.log(`${firstValue}, ${secondValue}`)
}
