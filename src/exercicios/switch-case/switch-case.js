/*
2. Faça uma fução que receba 2 notas de um ALUNO. Em seguida ele deve calcular a média do aluno e dar o seguinte resultado:
    A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
    A mensagem "Reprovado", se a média for menor do que sete;
    A mensagem "Aprovado com Distinção", se a média for igual a dez.
 */
    // const calculaMedia = (nota1, nota2) => {
    //   const media = (Number(nota1) + Number(nota2)) / 2
    //           10
    //   if(media >= 7 && media !== 10) {
    //     return `Aprovado com média ${media}`
    //   } else if(media == 10) {
    //     return `Aprovado com Distinção com média ${media}`
    //   } else if (media < 7) {
    //     return `Reprovado com média ${media}`
    //   } else {
    //     return 'Média Inválida'
    //   }
    // }
    // console.log(calculaMedia(10,10))

const calculaMedia = function (nota) {
  switch (nota) {
    case 10:
      console.log('Aprovadíssimo')
      break
    case 9:
      case 8:
        case 7:
          console.log('Aprovado')
          break
    case 6: case 5: case 4: case 3: case 2: case 1: case 0:
      console.log('Reprovado')
      break
    case 11:
    console.log('Nota inválida')
  }
}

calculaMedia(12)