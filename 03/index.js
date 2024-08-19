//Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')()

let grade = Number(prompt('Digite a nota: '))

if( grade >= 7 ) {
  console.log(`Parabéns pela nota ${grade}, você foi Aprovado!!`)
} else if ( grade >= 4 ){
  console.log(`Com a nota ${grade}, seja bem-vindo a Recuperação.`)
} else {
  console.log(`Com a nota ${grade}, você foi Reprovado.`)
}