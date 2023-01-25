const sal = 3000;
let salBase;
let salLiq;


if (sal <= 1556.94){
    salBase = sal - sal * 0.08;

}else if(sal > 1556.94 && sal <= 2594.92){
    salBase = sal - sal * 0.09;

}else if (sal > 2594.92 && sal <= 5189.92){
    salBase = sal - sal * 0.11;

}else{
    salBase = sal - 570.88;
}
if (salBase <= 1903.98){
    salLiq = salBase

}else if (salBase > 1903.98 && salBase < 2826.66){
    salLiq = salBase - (salBase *0.075 - 142.8);

}else if (salBase > 2826.65 && salBase < 3751.06){
    salLiq = salBase - (salBase *0.15 - 354.8);

}else if (salBase > 3751.05 && salBase < 4664.69){
    salLiq = salBase - (salBase *0.225 - 636.13);

}else {
    salLiq = salBase - (salBase *0.275 - 869.36);
}
console.log('O salário líquido a ser recebido é R$: ' + salLiq);