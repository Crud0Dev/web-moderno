console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Daniel'
// obj1['nome'] = 'Lucas'
console.log(obj1.nome)

function Obj(nome) {
  this.nome = nome // Tranformando um atributo público para ser acessado fora do escopo dessa função
  this.exec = function() {
    console.log('Exec')
  }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()