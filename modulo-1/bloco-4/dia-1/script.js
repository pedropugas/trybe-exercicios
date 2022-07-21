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

// REQUISITO 6 //

const m = "torre";
const n = "cavalo";
const o =  "bispo";
const p = "rei";
const q = "rainha";
const r = "peão";

const peca = "REI".toLowerCase();

switch (peca) {
    case "torre":
        console.log(`A peça ${peca} anda nas horizontais e diagonais.`); 
        break;
    case "cavalo":
        console.log(`A peça ${peca} anda nas horizontais e diagonais em formato de L.`); 
        break;

    case "bispo":
        console.log(`A peça ${peca} anda na diagonal.`); 
        break;

    case "rei":
        console.log(`A peça ${peca} anda para todos os sentidos.`); 
        break;

     case "rainha":
        console.log(`A peça ${peca} anda para todos os sentidos.`); 
         break;

    case "peao":
        console.log(`A peça ${peca} anda para todos os sentidos.`); 
        break;

}

// REQUISITO 7 //

const s =-1;

if (s >= 90 && s <= 100) {
    console.log("Sua nota é A");

} else if (s >= 80 && s <= 100) {
    console.log("Sua nota é B");

} else if (s >= 70 && s <= 100) {
    console.log("Sua nota é C");

} else if (s >= 60 && s <= 100) {
    console.log("Sua nota é D");

} else if (s >= 50 && s <= 100) {
    console.log("Sua nota é E");

} else if(s < 50 && s >= 0) {
    console.log("Sua nota é F");

} else {
    console.log("ERRO: Insira uma porcentagem entre 0 e 100");

}

// REQUISITO 8 //

const t = 43;
const u = 53;
const v = 23;

if (t % 2 == 0 || u % 2 == 0 || v % 2 == 0) {
    console.log(true);
} else {
    console.log(false);
}

// REQUISITO 9 //


const w = 40;
const x = 53;
const y = 20;

if (w % 2 !== 0 || x % 2 !== 0 || y % 2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}