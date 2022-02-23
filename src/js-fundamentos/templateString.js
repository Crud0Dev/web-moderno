const nome = 'Lucas'
const sobrenome = 'travagin pereira'

//const nomeCompleto = 'Olá ' + nome + '' + sobrenome + '!'

//console.log(nomeCompleto)

// Template String

// const nomeCompleto = `Olá ${nome} ${sobrenome} !`
// console.log(nomeCompleto)

const up = (texto) => {
  console.log(texto)
 return texto.toUpperCase(texto)
}
const nomeCompleto1 = `Olá ${up(nome)} ${sobrenome} !`

console.log(nomeCompleto1)