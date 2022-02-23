const notas = [1.0, 2.2, 7.0, 7.7, 6.5, 9.2]

for (let i in notas) {
  console.log(i, notas[i])
}

const pessoa = {
  nome: 'Daniel',
  idade: 24,
  peso: 84
}

for(let calango in pessoa) {
  console.log(`${calango} = ${pessoa[calango]}`)
}
