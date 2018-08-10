// let message: string = "Help me, Obi-wan Kenobi. You're my only hope!"
// console.log(message)
// let episode: number = 4
// console.log('This is epsiode' + 4);
// episode = episode + 1
// console.log('Next episode is ' + episode)
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " parsecs enough to beat MF? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5, 1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
function retornarPreco(reais, centavos) {
    return 'R$' + reais + ',' + centavos;
}
console.log("Custa: " + retornarPreco(5, 90));
