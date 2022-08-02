// -- EXERCÍCIO 4.2 -- //

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Questão 1 // 

/*

for(let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);

}

*/

// Questão 2 // 

/*

var soma = 0;

for(let index = 0; index < numbers.length; index += 1) {
    var total = soma += numbers[index];

}

console.log(total);

*/

// Questão 3 //

/*

var soma = 0;

for(let index = 0; index < numbers.length; index += 1) {
    var total = soma += numbers[index];
    var mediaAritmetica = total / numbers.length;

}

console.log(mediaAritmetica);

*/

// Questão 4 //

/*

var soma = 0;

for(let index = 0; index < numbers.length; index += 1) {
    var total = soma += numbers[index];
    var mediaAritmetica = total / numbers.length;

}

if(mediaAritmetica > 20) {
    console.log('Valor maior que 20');

} else {
    console.log('Valor menor ou igual a 20')

}

*/

// Questão 5 //

/*

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1){
    if(numbers[index] > higherNumber) {
        higherNumber = numbers[index];
    }

}

console.log(higherNumber);

*/

// Questão 6 //

/* 

let result = 0;

for (let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 !== 0) {
        result += 1;
    }
}

if(result === 0) {
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log(result)

}

*/

// Questão 7 //

/* 

let lowerNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1){
    if(numbers[index] < lowerNumber) {
        lowerNumber = numbers[index];
    }
}

console.log(lowerNumber);

*/

// Questão 8 //

/*

for(let index = 1; index <= 25; index += 1) {
    console.log(index)
}

*/

// Questão 9 //

/*

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
  };

*/