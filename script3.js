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