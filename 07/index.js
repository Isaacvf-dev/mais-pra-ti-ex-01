/*As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra. */

const prompt = require('prompt-sync')()

let appleAmount = Number(prompt('Digite a quantidade de maçãs compradas: '))
let totalPrice

if( appleAmount >= 12 ) {
  totalPrice = appleAmount * 0.25   
} else {
  totalPrice = appleAmount * 0.30   
}
console.log('Valor total da compra: R$ ' + totalPrice.toFixed(2)) 
