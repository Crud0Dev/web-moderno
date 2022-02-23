// O básico sobre var, let e const

// var a = 3
// let b = 4

// var a = 30
// b = 40

// //console.log(b + b2)

// function getIds() {
//   var userId = 1;
//   let postId  = 200;
//   const siteId = 400;

// console.log( userId );
// console.log( postId );
// console.log( siteId );
// }

// console.log( userId );
// console.log( postId );
// console.log( siteId ); 

//var permite que vc crie 2 variáveis com o mesmo nome
// let não aceita a mesma coisa

// void function(){
//   var mensagem;
//   console.log(mensagem);
// }();
// mensagem = "olá mundo";

// console.log(mensagem);

var exibeMensagem = function() {
  if(true) {
    var escopoFuncao = 'Caelum';
    let escopoBloco = 'Alura';

    console.log(escopoBloco); // Alura
  }
  console.log(escopoFuncao); //Caelum 
  //console.log(escopoBloco); 
}
exibeMensagem();