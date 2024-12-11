// Portée globale
var globalVar = "Je suis une variable globale";
let globalLet = "Je suis aussi global, mais avec une portée let";
const globalConst = "Je suis une constante globale";


{
// Portée de bloc
var blockVar = "Je suis une var avec portée de bloc";
let blockLet = "Je suis un let avec portée de bloc";
const blockConst = "Je suis une const avec portée de bloc";
}
// Portée globale
console.log(globalVar); // Sortie : "Je suis une variable globale"
console.log(globalLet); // Sortie : "Je suis aussi global, mais avec let"
console.log(globalConst); // Sortie : "Je suis une constante globale"