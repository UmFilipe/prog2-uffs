const somaAte = () => {
    const n = parseInt(prompt("Insira um número"))
    let resultado = 0

    for (let i = 1; i <= n; i++) {
        resultado += i
    }

    return resultado
}

console.log("O resultado é: " + somaAte())
alert("O resultado final está no console (F12)")
