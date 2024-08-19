//Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require('prompt-sync')() 

let userNumber = Number(prompt('Digite o número: '))

let tabuada = []

for( let i = 1; i <= 10; i++ ){  
  tabuada.push({"Tabuada": i, "Resultado": userNumber * i})  
}

console.table(tabuada)