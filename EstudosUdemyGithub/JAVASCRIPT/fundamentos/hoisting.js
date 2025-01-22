console.log('a =', a)
var a = 2
console.log('a =', a)
// o que acontece é isso:
//
//  var a
//  console.log('a =', a)
//  a = 2
//  console.log('a =', a)
//
// Por isso que o primeiro aparece como Undefined, mas considera o var a como algo existente

