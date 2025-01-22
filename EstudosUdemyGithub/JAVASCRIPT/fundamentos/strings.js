const escola = "1FRN"

console.log(escola.charAt(3))

console.log(escola.charAt(6)) // aparece vazio no log

console.log(escola.charCodeAt(3))   // tabela ASCIII  ( html 5 )

console.log(escola.indexOf('3'))    // referente ao digito 3 dentro da const escola

console.log(escola.substring(1))    // ele vai a partir do indice 1 para frente

console.log(escola.substring(0, 3)) // ele vai do indice 0 ao 3, imprimindo a partir do 0, 3 caracteres

console.log('Escola '.concat(escola).concat("!"))   // concatena tudo, junta tudo

console.log('Escola ' + escola + "!")   // mesma coisa, desde que a String tenha preferência

console.log(escola.replace(1, 'I'))

console.log('Ana,Maria,Pedro'.split(','))   // gera uma array

