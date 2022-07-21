// REQUISITO 1 //

const a = 5;
const b = 10;

var soma = a + b;
var subtracao = a - b;
var multiplicacao = a * b;
var divisao = a / b;
var modulo = a % b;

// REQUISITO 2 //

const c = 15;
const d = 20;

if (c > d) {
    console.log(`O número ${c} é maior do que ${d}`);

} else if (c === d) {
    console.log(`O número ${c} é igual a ${d}`);

}   else {
    console.log(`O número ${c} é menor do que ${d}`);
} 

// REQUISITO 3 //

const e = 25;
const f = 30;
const g = 35;

if (e > f && e > g) {
    console.log(`O número ${e} é maior que ${f} e ${g}`);

} else if (f > e && f > g) {
    console.log(`O número ${f} é maior que ${e} e ${g}`);

} else {
    console.log(`O número ${g} é maior que ${e} e ${f}`)
}

// REQUISITO 4 //

const h = 1;

if (h > 0){
    console.log(`O número ${h} é positivo`);

}   else if (h === 0) {
    console.log(`O número ${h} é neutro`);

} else {
    console.log(`O número ${h} é negativo`);
}

// REQUISITO 5 //

const i = 60;
const j = 60;
const k = 20;
const l = i + j + k;

if (i < 0 || j < 0 || k < 0) {
    console.log("Erro: Cada um dos ângulos devem ser um número positivo.");

} else if (l !== 180){
    console.log(l == 180);

} else if (l == 180) {
    console.log(l == 180);

} 

