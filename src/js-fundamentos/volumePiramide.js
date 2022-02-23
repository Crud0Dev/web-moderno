/* Basta inserir na nossa calculadora o comprimento do lado da base e altura.

* Volume da Piramide = Alura * l² / 3

*/
/**
 * Volume da pirâmide = Altura * l² / 3
 */

const altura = 20
const ladoDaBase = 35
const volumePiramide = Math.pow(ladoDaBase, 2) * altura / 3
const litros = volumePiramide * 100

console.log(`O volume da pirâmide é de: ${volumePiramide.toFixed(2)}, e a quantidade em litros é de: ${litros.toFixed(0)}`)