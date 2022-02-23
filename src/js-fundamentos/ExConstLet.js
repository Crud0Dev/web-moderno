/**
 * Daniel Augusto Crudo tem 24 anos, pesa 88 kg
 * tem 1.74 de altura e seu IMC é de 25.92
 * Daniel Augusto Crudo nasceu em 1997
 */

const nome = 'Daniel';
const sobrenome = 'Augusto Crudo';
const idade = 24;
const peso = 88;
const altura = 1.74;
let imc; // peso / (altura * altura)
let anoNascimento;
let imcAlterado;

anoNascimento = 2021 - idade
console.log(anoNascimento
  )
imc = peso / Math.pow(altura, 2)

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}Kg tem ${altura} e seu IMC é de ${Math.round(imc * 100) / 100}.${nome} ${sobrenome} nasceu no ano de ${anoNascimento}`)
