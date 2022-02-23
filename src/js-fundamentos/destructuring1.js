const pessoa = {
  nome: 'Daniel',
  idade: 24,
  endereco: {
    logradouro: 'Rua Marechal Deodoro',
    numero: 98
  }
}

const { nome, idade} = pessoa // Desestruturação
console.log(nome, idade)

const { nome: n, idade: i } = pessoa // Outro jeito
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa // Espera-se undefined e true
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa
console.log(ag, num)