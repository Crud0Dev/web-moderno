const funcs = []

for (var i =0; i < 10; i++) {
  funcs.push(function() {
    console.log(i)
  })
}
funcs[2]()
funcs[8]()

/**
 * Var não aceita ser chamada dentro do escopo de função, pois só permite ser chamada quando for usada em escopo de bloco
 */