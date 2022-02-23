function numeroMaior(){
  let numero1 = 20
  let numero2 = 30
  let numero3 = 50
  
  let numeroMaior = numero1

  if (numero2 > numeroMaior)
  numeroMaior = numero2;
  
  if (numero3 > numeroMaior)
  numeroMaior = numero3
  
  if (numero1 > numeroMaior)
  numeroMaior = numero1
  console.log(`o Maior número é: ${numeroMaior}`)
}

numeroMaior()


