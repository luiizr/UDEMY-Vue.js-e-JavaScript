const peso1 = 1.0
const peso2 = Number('2.0')
const peso3 = 1.1

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso3))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))   // quantidade de decimais

console.log(media.toString())   // caso queira passar para binario, colocar '2' dentro do toString

console.log(typeof media)   // tipo

console.log(typeof Number)  // função