//Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada

const prompt = require('prompt-sync')()

let choice = Number(prompt('Digite sua opção (1, 2 ou 3): '))


switch(choice) {
  case 1:
    console.log(`Opção ${choice} escolhida. Por favor, aguarde seu pedido.`)
    break
  case 2: 
   console.log(`Opção ${choice} escolhida. Por favor, aguarde seu pedido.`)
   break
  case 3:
    console.log(`Opção ${choice} escolhida. Por favor, aguarde seu pedido.`)
    break
  default:
    console.log('Escolha entre os números 1, 2 ou 3.')
}