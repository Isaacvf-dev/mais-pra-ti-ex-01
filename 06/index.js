/*Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)*/

const prompt = require('prompt-sync')()

let sideA = Number(prompt('Insira o lado A: '))
let sideB = Number(prompt('Insira o lado B: '))
let sideC = Number(prompt('Insira o lado C: '))

let triangle = sideA + sideB > sideC && sideB + sideC > sideA && sideA + sideC > sideB 

if (!triangle) {
  console.log('Os valores não formam um triângulo')
} else {
  if (sideA === sideB || sideB === sideC) {
    console.log('Triângulo eqüilátero: possui todos os lados iguais')
  } else if (sideA === sideB || sideA ===  sideC || sideB === sideC) {
    console.log('Triângulo isósceles: possui dois lados iguais')
  } else {    
    console.log('Triângulo escaleno: possui todos os lados diferentes')
  }
}



