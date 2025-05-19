let subir1 = document.querySelector("#subir1");
let subir2 = document.querySelector("#subir2");
let subir5 = document.querySelector("#subir5");
let subir10 = document.querySelector("#subir10");
let cotacaoDolar = document.querySelector("#cotacaoDolar");
let btnCalculo1 = document.querySelector("#btnCalculo1");



function ativ1(){
    
    //Retornando o valor digitado no campo
    let cotacaoDolarNumber = Number(cotacaoDolar.value);


    let dolar1Porcento = cotacaoDolarNumber / 100;
    let dolar1PorcentoS = (dolar1Porcento + cotacaoDolarNumber);
    let dolar2Porcento = dolar1Porcento * 2 + cotacaoDolarNumber;
    let dolar5Porcento = dolar1Porcento * 5 + cotacaoDolarNumber;
    let dolar10Porcento = dolar1Porcento * 10 + cotacaoDolarNumber;


    //Alterando o elemento do texto h1
    subir1.textContent = dolar1PorcentoS;
    subir2.textContent = dolar2Porcento;
    subir5.textContent = dolar5Porcento;
    subir10.textContent = dolar10Porcento;
}

btnCalculo1.onclick = function(){
    ativ1();
}


//===============================================================


let ovo = document.querySelector("#ovo");
let queijo = document.querySelector("#queijo");
let pessoas = document.querySelector("#pessoas");
let btnCalculo2 = document.querySelector("#btnCalculo2");



function ativ2(){
    
    //Retornando o valor digitado no campo
    let pessoasNumber = Number(pessoas.value);


    let ovos = pessoasNumber * 2;
    let queijos = pessoasNumber * 50;


    //Alterando o elemento do texto h1
    ovo.textContent = ovos + " Unidades";
    queijo.textContent = queijos + " Gramas";
}

btnCalculo2.onclick = function(){
    ativ2();
}


//===============================================================


let soma = document.querySelector("#soma");
let subtracao = document.querySelector("#subtracao");
let multiplicacao = document.querySelector("#multiplicacao");
let divisao = document.querySelector("#divisao");
let numero1 = document.querySelector("#numero1");
let numero2 = document.querySelector("#numero2");
let btnCalculo3 = document.querySelector("#btnCalculo3");



function ativ3(){
    
    //Retornando o valor digitado no campo
    let numero1Number = Number(numero1.value);
    let numero2Number = Number(numero2.value);


    let somaS = numero1Number + numero2Number;
    let subtracaoS = numero1Number - numero2Number;
    let multiplicacaoS = numero1Number * numero2Number;
    let divisaoS = numero1Number / numero2Number;


    //Alterando o elemento do texto h1
    soma.textContent = somaS;
    subtracao.textContent = subtracaoS;
    multiplicacao.textContent = multiplicacaoS;
    divisao.textContent = divisaoS;
}

btnCalculo3.onclick = function(){
    ativ3();
}


//===============================================================


let sabor1 = document.querySelector("#sabor1");
let sabor2 = document.querySelector("#sabor2");
let sabor3 = document.querySelector("#sabor3");
let sabor4 = document.querySelector("#sabor4");
let refrigerante = document.querySelector("#refrigerante");
let se = document.querySelector("#se");
let total = document.querySelector("#total");
let btnCalculo4 = document.querySelector("#btnCalculo4");

 

function ativ4(){
    
    //Retornando o valor digitado no campo
    let sabor1N = String(sabor1.value);
    let sabor2N = String(sabor2.value);
    let sabor3N = String(sabor3.value);
    let sabor4N = String(sabor4.value);
    let refrigeranteNumber = Number(refrigerante.value);


    let valorSabores = 4 * 12.00;
    let valorRefrigerantes = refrigeranteNumber * 7.00;

    let valorTotal = valorSabores + valorRefrigerantes;


    //Alterando o elemento do texto h1
    se.textContent = sabor1N + ", " + sabor2N + ", " + sabor3N + ", " + sabor4N + " e " + refrigeranteNumber + " Refrigerantes.";
    total.textContent = valorTotal;
}

btnCalculo4.onclick = function(){
    ativ4();
}


//===============================================================