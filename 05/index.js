//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require('prompt-sync')()

let userWeight = parseFloat(prompt('Digite o peso em Kg (ex.: 70, 80,...): '))
let userHeight = parseFloat(prompt('Digite a altura em  (ex.: 1.60, 1.56,...): '))

let imc = (userWeight/ (userHeight ** 2)).toFixed(2)

if( imc > 29.9) {
  console.log(`Seu imc é ${imc}: obesidade`)
} else if ( imc > 24.9 ) {
  console.log(`Seu imc é ${imc}: sobrepeso`)
} else if ( imc > 18.5 ) {
  console.log(`Seu imc é ${imc}: peso normal`)
} else {
  console.log(`Seu imc é ${imc}: baixo peso`)
}

