console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
  console.log(typeof Cliente)
  console.log(typeof new Cliente)

class Produto {}
console.log(typeof Produto ,'"Produto sendo function"')
console.log(typeof new Produto, '"Produto transformado em objeto"')
/*Quando você instancia uma variável, vc está transformando-a em um tipo Object ao invés de função*/