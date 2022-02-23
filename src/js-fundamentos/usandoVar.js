{{{{ var sera = 'Será???'}}}} // Escopo global 
console.log(sera)

function teste() {
  var local = 123 // Escopo de função "LOCAL"
}

teste()
console.log(local)