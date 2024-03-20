const horasTrabalhadas = parseInt(prompt("Insira o número de horas trabalhadas"))

const valorHora = parseFloat(prompt("Insira o valor da hora trabalhada"))

function calcularSalario(horasTrabalhadas, valorHora){
    let salario = horasTrabalhadas * valorHora

    if (horasTrabalhadas > 200){
        const valorAcrescido = salario * 0.05
        salario += valorAcrescido
    }

    return salario
}

alert("O resultado final está no console (F12)")
console.log("O salário final é: " + calcularSalario(horasTrabalhadas, valorHora))
