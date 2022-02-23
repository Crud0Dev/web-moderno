const nome = 'Daniel Crudo da Silva' // Apenas sobrenome
const anoNascimento = 1997 // 
const sexo = 'Masculino' // Somente o primeiro caractere
const altura = 1.740878 // 1 casa decimal e 2 numeros fracionados
const peso = 94 // 94kg
const pesoEmKg = 'kg'

//Missão: montar a seguinte tabela

/**
 *Nome: Crudo da Silva,
 Idade: 24 Anos,
 Sexo: "M",
 Altura: 1.74,
 Peso: 94kg
 */

console.log('Nome:',nome.substring(6).concat(','))
console.log('Sexo:',sexo.charAt(0))
console.log('Altura:',altura.toFixed(2))
console.log('Peso:' .concat(peso).concat(pesoEmKg))
console.log('Ano de Nascimento:',anoNascimento)