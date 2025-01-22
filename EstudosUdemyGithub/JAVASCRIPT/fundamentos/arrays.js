const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 20
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')    // adiciona novos elementos
console.log(valores)

console.log(valores.pop())  // retira o ultimo

delete valores[0]   // retira o primeiro
console.log(valores)

console.log(typeof valores)     // em js, array é um object

