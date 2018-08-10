// let message: string = "Help me, Obi-wan Kenobi. You're my only hope!"
// console.log(message)

// let episode: number = 4

// console.log('This is epsiode' + 4);
// episode = episode + 1
// console.log('Next episode is ' + episode)


let isEnoughToBeatMF = function (parsecs: number) : boolean {
    return parsecs < 12
}

let distance = 14;

console.log(`Is ${distance} parsecs enough to beat MF? ${isEnoughToBeatMF(distance) ? 'YES':'NO'}`)

let call = (name: String) => console.log(`Do you copy, ${name}?`)

call('R2')

function inc (speed: number, inc: number = 1): number{
    return speed + inc
}

console.log(`inc (5, 1) = ${inc(5, 1)}`)
console.log(`inc (5) = ${inc(5)}`)


function retornarPreco (reais: number, centavos: number): String{
    return 'R$' + reais + ',' + centavos
}

console.log(`Custa: ${retornarPreco(5,90)}`)