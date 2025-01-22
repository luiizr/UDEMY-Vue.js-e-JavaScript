var numero = 1      // aqui pode ser tanto let quanto var que não vai mudar o resultado
{
    let numero = 2  // pois essa variável aqui é let, e ela não sai desse escopo
    console.log('dentro =', numero)
}
console.log('fora =', numero)