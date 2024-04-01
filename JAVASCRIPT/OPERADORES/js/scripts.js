// 1 - NUMBER
console.log(37);
console.log(typeof 37); //typeof+espaço mostra no console a prova real do tipo de dado

// 2 - Special Numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(2 * 'rvg');
console.log(typeof NaN);

// 3 - Strings
console.log("Um texto em aspas duplas");
console.log('Outro texto em aspas simples');
console.log('Texto em \n duas linhas'); // \n quebra a linha do texto
console.log('Espaçamento \t em tab'); // \t da um espaçamento de tab no texto

// 4 - Template Strings (interpolação)
console.log(`A soma de 2 + 2 é igual a ${2+2}`);

// 5 - Comparações
console.log(10 < 9);
console.log (10 == 10);
console.log(5 == 4);
console.log(3 != 1);

// 6 -Idêntico (esse operador avalia até o TIPO de dado)
console.log(5 == "5");
console.log(5 === "5");

console.log(5 != "5");
console.log(5 !== "5");

// 7 - Operadores lógicos
// && E
// || ou
// ! não (negativo) inverte a comparação