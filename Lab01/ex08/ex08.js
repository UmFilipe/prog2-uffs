function positivosENegativos(){
    let numerosPositivos = 0
    let numerosNegativos = 0

    for (let i = 0; i < 4; i++) {
        let n = parseInt(prompt("Insira um número"))
        
        if (n >= 0){
            numerosPositivos += 1
        } else {
            numerosNegativos += 1
        }

    }

    return `${numerosPositivos} (+) e ${numerosNegativos} (-)`
}

console.log(positivosENegativos())
alert("O resultado final está no console (F12)")

