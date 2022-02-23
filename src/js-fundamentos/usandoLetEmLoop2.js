const funcs = []

for (let i =0; i < 10; i++) {
  funcs.push(function() {
    console.log(i)
  })
}
funcs[2]()
funcs[8]()
funcs[6]()
/**
 * Aqui, usando let ele terá memória para buscar o valor de i no instante em que foi processado,
 * sendo assim, ele trará o resultado de acordo com o índex que passarmos, pois let está declarado em um bloco de função,
 * tendo assim a possibilidade de ser chamada fora do bloco
 */