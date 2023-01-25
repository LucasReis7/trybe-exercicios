let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
}


let soma = 0;
for (let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
}
console.log('A soma do array é: ' + soma); 


let media;
for (let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
}
media = soma/numbers.length
console .log('A media do array é: '+ media);


if (media > 20){
    console.log('O valor é maior que 20');
}else{
    console.log('Valor igual ou menor que vinte');
}


let maior = 0;
for(let index = 0;index < numbers.length; index += 1){
    if (numbers[index] >= maior){
        maior = numbers[index]
    }
    
}
console.log('O maior numero dentro do array é: ' + maior);


let cont = 0;
for(let index = 0;index < numbers.length; index += 1){
    if( numbers[index] % 2 != 0) {
        cont += 1
    }
}
if ( cont === 0){
    console.log('Nenhum valor impar encontrado');
} else {
    console.log('A quantidade de numeros impares dentro do array é: ' + cont); 
}


let menor = numbers[0];
for(let index = 1;index < numbers.length; index += 1){
    if (numbers[index] < menor){
        menor = numbers[index];
    }
}
console.log('O menor numero do array é: ' + menor);


let numb = [];
for(let index = 1;index <= 25; index += 1){
    numb.push(index);
}
console.log(numb);


for(let index = 0;index < numb.length; index += 1){
    console.log(numb [index]/2);
}