//Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require('prompt-sync')()

let age = Number(prompt('Insira a idade: '))

if(age >= 60) {
  console.log(`Idade ${age}: Idoso`)
} else if(age < 60 && age >= 18) {
  console.log(`Idade ${age}: Adulto`)
} else if(age < 18 && age >= 13){
  console.log(`Idade ${age}: Adolescente`)
} else {
  console.log(`Idade ${age}: criança`)
}
