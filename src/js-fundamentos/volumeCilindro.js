// Calcular o volume de um cilindro
//columeCilindro = PI * R² * h
// Para calcular a capacidade litros de um cilindro a formula é: volume cúbico * 1000

const diametro = 4
const altura = 5
const raio = 2
const volume = Math.PI * Math.pow(raio, 2) * altura
const litros = volume * 100

console.log(`O volume do cilindro é: ${volume.toFixed(2)} m³, com capacidade em litros de: ${litros.toFixed(0)}`)


const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
console.log(area)

console.log(typeof Math)
console.log(Math.PI.toFixed(2))