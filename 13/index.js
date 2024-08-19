//Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require('prompt-sync')()

let decimalNumber = Number(prompt('Digite um número decimal: '))
let sum = 0
let count = 0

do {
  sum += decimalNumber
  count++
  decimalNumber = Number(prompt('Digite um número decimal: '))
  
} while(decimalNumber !== 0)

console.log(`Sum: ${sum}, Count: ${count}, Avg: ${sum/count}`)