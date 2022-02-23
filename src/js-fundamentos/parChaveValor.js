// Definição de chave valor fora de uma função
const saudacao = 'Opa' // Contexto léxico 1

// Definição de chave valor dentro de uma função, o contexto muda,
// por estar dentro de uma função que tem um comportamento.
function exec(){
  const saudacao = 'Falaa' // Contexto léxico 2
  /*saudacao é a mesma var definida na linha 2, porém
  como estão definidas em contextos léxicos diferentes, elas não geram comflito*/
  return saudacao
}

/**
 * Objetos são grupos aninhados de {chave:valor}  
 */

const cliente = {
  nome: 'Pedro', // Contexto léxico 1
  sobrenome: 'Sampaio',
  idade: '32',
  peso: 75,
  endereco: {
    logradouro: 'Rua Arnaldo', // Contexto léxico 2
    numero: 310,

  }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)