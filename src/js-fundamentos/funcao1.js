// Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3) // resultado 5, pois é a soma dos dois parâmetros 
imprimirSoma(2) // NaN = Not a Number, tentou somar um parâmetro com um "undefined" e isso gera NaN
imprimirSoma(2, 10, 4, 5, 6) // Ignora todos os outros números porque só temos 2 parâmetros, então ele somará apenas os 2
imprimirSoma() // NaN pois não está passando nenhum número para os Parâmetros e assim efetuar a soma

// Função com retorno 
function soma(a, b = 1) {
  return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())