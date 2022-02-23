const escola = "Cod3r"
const dominio = "site@daniel"

console.log(escola.charAt(4)) // Retorna o caractere de um determinado index
console.log(escola.charAt(5)) // Retorna vazio porque não temos letras no index 5
console.log(escola.charCodeAt(3)) // Retorna unicode da tabela ASCII
console.log(escola.indexOf(3)) // Retorna a posição do index
console.log(dominio.substring(4)) //Corta a string a partir do index que for definido
console.log(dominio.substring(4, 15))// corta o primeiro index até o index desejado no final
console.log('Nome: '.concat(escola).concat(' \ndominio: ').concat(dominio))
console.log(escola.replace(3, 'e')) // Replace substitui uma string por outra que vc quiser
console.log(escola.replace(/\w/g, 'P')) // RegEx
console.log('Ana, Maria, Pedro'.split(','))
console.table('Ana, Maria, Pedro'.split(','))