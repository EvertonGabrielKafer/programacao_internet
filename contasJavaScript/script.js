let resultado1 = document.querySelector("#resultado1");
let inputNumero1 = document.querySelector("#inputNumero1");
let inputNumero2 = document.querySelector("#inputNumero2");
let btnSoma1 = document.querySelector("#btnSoma1");



function soma1(){

    //let valor = inputNumero1 + inputNumero2;
    
    //Retornando o valor digitado no campo
    let textoDigitado1 = Number(inputNumero1.value);
    let textoDigitado2 = Number(inputNumero2.value);

    let valor = textoDigitado1 + textoDigitado2;


    //Alterando o elemento do texto h1
    resultado1.textContent = valor;
}

btnSoma1.onclick = function(){
    soma1();
}


//===============================================================


let resultado2 = document.querySelector("#resultado2");
let inputValor1 = document.querySelector("#inputValor1");
let inputValor2 = document.querySelector("#inputValor2");
let btnSoma2 = document.querySelector("#btnSoma2");

function soma2(){

    //let valor = inputNumero1 + inputNumero2;
    
    //Retornando o valor digitado no campo
    let n1 = Number(inputValor1.value);
    let n2 = Number(inputValor2.value);

    let valor2 = n2 - n1;


    //Alterando o elemento do texto h1
    resultado2.textContent = valor2;
}

btnSoma2.onclick = function(){
    soma2();
}


//=============================================================


let resultado3 = document.querySelector("#resultado3");
let valorquilo = document.querySelector("#valorquilo");
let qtdquilo = document.querySelector("#qtdquilo");
let btnSoma3 = document.querySelector("#btnSoma3");

function calculo3(){
    
    //Retornando o valor digitado no campo
    let valorquilo1 = Number(valorquilo.value);
    let qtdquilo1 = Number(qtdquilo.value);

    //Conta
    let valor3 = qtdquilo1 * valorquilo1;


    //Alterando o elemento do texto h3
    resultado3.textContent = valor3;
}

btnSoma3.onclick = function(){
    calculo3();
}


//=============================================================


let resultado4 = document.querySelector("#resultado4");
let saldo = document.querySelector("#saldo");
let btnSoma4 = document.querySelector("#btnSoma4");

function calculo4(){
    
    //Retornando o valor digitado no campo
    let saldo1 = Number(saldo.value);


    //Conta
    let saldoPorCem = saldo1 / 100;
    let valor4 = saldo1 + saldoPorCem;


    //Alterando o elemento do texto h3
    resultado4.textContent = valor4;
}

btnSoma4.onclick = function(){
    calculo4();
}


//=============================================================


let priNumero = document.querySelector("#priNumero");
let segNumero = document.querySelector("#segNumero");
let terNumero = document.querySelector("#terNumero");
let mediaA = document.querySelector("#mediaA");
let mediaP = document.querySelector("#mediaP");
let mediaS = document.querySelector("#mediaS");
let mediaM = document.querySelector("#mediaM");
let btnSoma5 = document.querySelector("#btnSoma5");

function calculo5(){
    
    //Retornando o valor digitado no campo
    let priNumeroNumber = Number(priNumero.value);
    let segNumeroNumber = Number(segNumero.value);
    let terNumeroNumber = Number(terNumero.value);


    //Conta
    //Média aritmética
    let ma = (priNumeroNumber + segNumeroNumber + terNumeroNumber) / 3;
    
    //Média ponderada
    let mp = (priNumeroNumber * 3 + segNumeroNumber * 2 + terNumeroNumber * 5) / (3 + 2 + 5);

    //Médias somadas
    let ms = ma + mp;

    //Media médias
    let mm = ms / 2;


    //Alterando o elemento do texto h3
    //Média aritmética
    mediaA.textContent = ma;

    //Média ponderada
    mediaP.textContent = mp;

    //Médias somadas
    mediaS.textContent = ms;

    //Media médias
    mediaM.textContent = mm;

}

btnSoma5.onclick = function(){
    calculo5();
}


//=============================================================


let resultado6 = document.querySelector("#resultado6");
let priValor = document.querySelector("#priValor");
let segValor = document.querySelector("#segValor");
let btnSoma6 = document.querySelector("#btnSoma6");

function calculo6(){
    
    //Retornando o valor digitado no campo
    let priValorNumber = Number(priValor.value);
    let segValorNumber = Number(segValor.value);


    //Conta //Alterando o elemento do texto h3
    if (priValorNumber > segValorNumber){
        resultado6.textContent = priValorNumber;
    } else {
        resultado6.textContent = segValorNumber;
    };


    
}

btnSoma6.onclick = function(){
    calculo6();
}


//=============================================================


let resultado7 = document.querySelector("#resultado7");
let valorPri = document.querySelector("#valorPri");
let valorSeg = document.querySelector("#valorSeg");
let valorTer = document.querySelector("#valorTer");
let valorQua = document.querySelector("#valorQua");
let btnSoma7 = document.querySelector("#btnSoma7");

function calculo7(){
    
    //Retornando o valor digitado no campo
    let valorPriNumber = Number(valorPri.value);
    let valorSegNumber = Number(valorSeg.value);
    let valorTerNumber = Number(valorTer.value);
    let valorQuaNumber = Number(valorQua.value);


    //Conta //Alterando o elemento do texto h3
    
    let numeroMenor = valorPriNumber;

    if (valorSegNumber < numeroMenor){
        numeroMenor = valorSegNumber;
    };
    if (valorTerNumber < numeroMenor){
        numeroMenor = valorTerNumber;
    };
    if (valorQuaNumber < numeroMenor){
        numeroMenor = valorQuaNumber;
    };

    resultado7.textContent = numeroMenor;

    /*if (valorSegNumber < valorPriNumber){
        if(valorTerNumber < valorPriNumber){
            if(valorQuaNumber < valorPriNumber){
                resultado7.textContent = valorPriNumber;
            } else {
                resultado7.textContent = valorQuaNumber;
            }
        } else {
            resultado7.textContent = valorTerNumber;
        }
    } else {
        if(valorTerNumber < valorSegNumber){
            if(valorQuaNumber < valorSegNumber){
                resultado7.textContent = valorSegNumber;
            } else {
                resultado7.textContent = valorQuaNumber;
            }
        } else {
            resultado7.textContent = valorTerNumber;
        }
        //resultado7.textContent = valorSegNumber;
    };*/
}

btnSoma7.onclick = function(){
    calculo7();
}


//=============================================================


let resultado8 = document.querySelector("#resultado8");
let testeValor = document.querySelector("#testeValor");
let btnSoma8 = document.querySelector("#btnSoma8");


function calculo8(){
    
    //Retornando o valor digitado no campo
    let testeValorNumber = Number(testeValor.value);
    //let resultadoTesteTexto = Text(resultadoTeste.value);
    let resultadoTeste = (testeValorNumber % 2) ===0 ? 'Par' : 'Impar';
    //Conta
    //let testeValorNumberDividido = testeValorNumber % 2
    

    //Alterando o elemento do texto h3
    /*if (testeValorNumber % 2 === 0){
        resultadoTeste = 1;
    } else {
        resultadoTeste = 2;
    };*/
    
    

    resultado8.textContent = resultadoTeste;


    
}

btnSoma8.onclick = function(){
    calculo8();
}

