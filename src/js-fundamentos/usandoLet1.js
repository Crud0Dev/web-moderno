let numero = 1
{
  let numero = 2
  console.log('dentro=', numero)
}
console.log('fora =', numero)

/**
 * Aqui temos 2 Escopos, var que é um escopo gloval, ou seja, visível á todos. 
 * E temos também let que está dentro de um escopo "LOCAL", onde o console.log() irá acessar a varável número,
 * apenas dentro do escopo na qual a variável "let" está declarada.
 */