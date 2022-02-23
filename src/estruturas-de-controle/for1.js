let contador = 1

while (contador <= 10) {
  console.log(`contador = ${contador}`)
  contador++
}

for(let i = 1; i <= 10; i++) {
  console.log(`i = ${i}`)
} 

// Percorrendo array até ele ser menor que o ultimo elemento do array

const notas = [6.0, 6.5, 9.1, 8.8, 9.7]
for(let i = 0; i < notas.length; i++) {
  console.log(`nota = ${notas[i]}`)
}