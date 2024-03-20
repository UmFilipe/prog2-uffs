const precoProduto = prompt("Insira o preço do produto")

const formaPagamento = prompt("Insira a forma de pagamento (1 para à vista // 2 para à prazo)")

const precoFinal = (precoProduto, formaPagamento) => {
    const desconto = precoProduto * 0.05
    const acrescimo = precoProduto * 0.1
    let precoFinal = 0

    if (formaPagamento == 1) {
        precoFinal = precoProduto - desconto
    } else {
        precoFinal = precoProduto + acrescimo
    }

    return precoFinal
}

alert("O resultado final está no console (F12)")
console.log("O preço final é " + precoFinal(precoProduto, formaPagamento))
