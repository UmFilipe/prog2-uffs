const primeiroNumero = parseInt(prompt("Insira o primeiro número:"))

const segundoNumero = parseInt(prompt("Insira o segundo número:"))

function multiplicacaoPorAdicoes(primeiroNumero, segundoNumero){
    let resultado = primeiroNumero

    for (let i = 1; i < segundoNumero; i++) {
        resultado += primeiroNumero
    }

    return resultado
}

alert("O resultado final está no console (F12)")
console.log("O resultado da multiplicação é: " + multiplicacaoPorAdicoes(primeiroNumero, segundoNumero))