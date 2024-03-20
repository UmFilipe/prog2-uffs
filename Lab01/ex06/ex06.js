function calcularPercentualEntre10e20() {
    let totalNumeros = 0
    let numerosEntre10e20 = 0
    let percentual

    while (true) {
        const n = parseInt(prompt("Insira um número (um número menor ou igual a 0 finaliza a sequência):"))

        if (n <= 0) {
            break
        }

        totalNumeros++

        if (n >= 10 && n <= 20) {
            numerosEntre10e20++
        }
    }

    if (totalNumeros === 0) {
        percentual = 0
        return percentual
    }

    percentual = (numerosEntre10e20 / totalNumeros) * 100;

    return percentual
}

console.log("A porcentagem de números entre 10 e 20 é: " + calcularPercentualEntre10e20().toFixed(2) + "%")
alert("O resultado final está no console (F12)")
