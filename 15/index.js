//Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
let fibonacciArray = []

fibonacciArray[0] = 1
fibonacciArray[1] = 1

for(let i = 2; i < 10; i++) {
  fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2]
}

for(let i = 0; i < 10; i++) {
  console.log(fibonacciArray[i])
}