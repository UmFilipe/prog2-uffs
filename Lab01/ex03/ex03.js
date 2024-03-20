const horaInicio = parseInt(prompt("Insira a hora de início (0 a 23)"))

const horaFim = parseInt(prompt("Insira a hora do final (0 a 23)"))

function duracaoEvento(horaInicio, horaFim) {
    let duracao

    if(horaFim < horaInicio) {
        duracao = (24 - horaInicio) + horaFim;
    } else {
        duracao = horaFim - horaInicio;
    }

    return duracao
}

alert("O resultado final está no console (F12)")
console.log("A duração do evento é: " + duracaoEvento(horaInicio, horaFim) + " horas")