let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)      // ! faz a negação da variável, aqui estamos negando 2 vezes, fazendo assim ele ser ele mesmo

console.log('os verdadeitos...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // não é o resultado, mas se o que foi para a variável é verdadeiro

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))


console.log('Para finalizar...')
console.log(('' || null || 0 || ' '))



let nome = ''
console.log(nome || 'Desconhecido') // se tiver nome, retorna nome, se não, retorna Desconhecido

