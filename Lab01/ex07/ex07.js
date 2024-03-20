const n = prompt("Insira um número para o cálculo de seu fatorial")

function fatorial(n){
    if (n == 0 || n == 1){
        return 1
    } else {
        return n * fatorial(n - 1)
    }

}

alert("O resultado final está no console (F12)")
console.log("O fatorial de " + n + " é: " + fatorial(n))