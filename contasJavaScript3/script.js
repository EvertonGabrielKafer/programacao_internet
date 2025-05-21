let baseTerreno = document.querySelector("#baseTerreno");
let alturaTerreno = document.querySelector("#alturaTerreno");
let btnCalculo1 = document.querySelector("#btnCalculo1");
let areaTerreno = document.querySelector("#areaTerreno");

function ativ1(){
    let baseTerrenoNumber = Number(baseTerreno.value);
    let alturaTerrenoNumber = Number(alturaTerreno.value);

    let areaTerrenoTotal = baseTerrenoNumber * alturaTerrenoNumber;

    areaTerreno.textContent = areaTerrenoTotal + "m2";
}
btnCalculo1.onclick = function(){
    ativ1();
}

//=====================================================================


let numeroPaes = document.querySelector("#numeroPaes");
let numeroBroas = document.querySelector("#numeroBroas");
let btnCalculo3 = document.querySelector("#btnCalculo3");
let numeroArrecadado = document.querySelector("#numeroArrecadado");
let numeroPoupanca = document.querySelector("#numeroPoupanca");

function ativ3(){
    let numeroPaesNumber = Number(numeroPaes.value);
    let numeroBroasNumber = Number(numeroBroas.value);

    let numeroArrecadadoTotal = (numeroPaesNumber * 0.12) + (numeroBroasNumber * 1.50);

    let numeroPoupancaTotal = (numeroArrecadadoTotal / 100) * 10;

    numeroArrecadado.textContent = numeroArrecadadoTotal;
    numeroPoupanca.textContent = numeroPoupancaTotal;
}
btnCalculo3.onclick = function(){
    ativ3();
}

//=====================================================================


let nome = document.querySelector("#nome");
let idade = document.querySelector("#idade");
let btnCalculo4 = document.querySelector("#btnCalculo4");
let respostaDias = document.querySelector("#respostaDias");

function ativ4(){
    let nomeString = String(nome.value);
    let idadeNumber = Number(idade.value);

    let respostaDiasTotal = idadeNumber * 365;


    respostaDias.textContent = nomeString + ", Voce ja viveu " + respostaDiasTotal;
}
btnCalculo4.onclick = function(){
    ativ4();
}

//=====================================================================


let quilo = document.querySelector("#quilo");
let btnCalculo6 = document.querySelector("#btnCalculo6");
let valorPrato = document.querySelector("#valorPrato");

function ativ6(){
    let quiloNumber = Number(quilo.value);


    let valorPratoTotal = quiloNumber * 12;


    valorPrato.textContent = valorPratoTotal + " Reais";
}
btnCalculo6.onclick = function(){
    ativ6();
}

//=====================================================================


let dia = document.querySelector("#dia");
let mes = document.querySelector("#mes");
let btnCalculo7 = document.querySelector("#btnCalculo7");
let diasPassados = document.querySelector("#diasPassados");

function ativ7(){
    let diasNumber = Number(dia.value);
    let mesNumber = Number(mes.value);

    let mesMenosDias = (mesNumber - 1) * 30;
    let diasPassadosTotal = mesMenosDias + diasNumber;


    diasPassados.textContent = diasPassadosTotal + " Dias";
}
btnCalculo7.onclick = function(){
    ativ7();
}

//=====================================================================


let qtdCamisaPequena = document.querySelector("#qtdCamisaPequena");
let qtdCamisaMedia = document.querySelector("#qtdCamisaMedia");
let qtdCamisaGrande = document.querySelector("#qtdCamisaGrande");
let btnCalculo8 = document.querySelector("#btnCalculo8");
let valorTotalCamisas = document.querySelector("#valorTotalCamisas");

function ativ8(){
    let qtdCamisaPequenasNumber = Number(qtdCamisaPequena.value);
    let qtdCamisaMediaNumber = Number(qtdCamisaMedia.value);
    let qtdCamisaGrandeNumber = Number(qtdCamisaGrande.value);

    let valorTotalCamisasTotal = (qtdCamisaPequenasNumber * 10) + (qtdCamisaMediaNumber * 12) + (qtdCamisaGrandeNumber * 15);


    valorTotalCamisas.textContent = valorTotalCamisasTotal + " Reais";
}
btnCalculo8.onclick = function(){
    ativ8();
}

//=====================================================================


let priPontoX = document.querySelector("#priPontoX");
let priPontoY = document.querySelector("#priPontoY");
let segPontoX = document.querySelector("#segPontoX");
let segPontoY = document.querySelector("#segPontoY");
let btnCalculo9 = document.querySelector("#btnCalculo9");
let distanciaFinal = document.querySelector("#distanciaFinal");

function ativ9(){
    let priPontoXNumber = Number(priPontoX.value);
    let priPontoYNumber = Number(priPontoY.value);
    let segPontoXNumber = Number(segPontoX.value);
    let segPontoYNumber = Number(segPontoY.value);

    let distanciaFinalTotal1 = ((segPontoXNumber - priPontoXNumber)**2) + ((segPontoYNumber - priPontoYNumber)**2);
    let distanciaFinalTotal = Math.sqrt(distanciaFinalTotal1);


    distanciaFinal.textContent = distanciaFinalTotal;
}
btnCalculo9.onclick = function(){
    ativ9();
}

//=====================================================================


let diasSemAcidentes = document.querySelector("#diasSemAcidentes");
let btnCalculo10 = document.querySelector("#btnCalculo10");
let TempoFinalSemAcidentes = document.querySelector("#TempoFinalSemAcidentes");

function ativ10(){
    let diasSemAcidentesNumber = Number(diasSemAcidentes.value);

    let anosSobra = diasSemAcidentesNumber % 365;
    let anosNumero = diasSemAcidentesNumber / 365;

    let mesesNumero = anosSobra / 12;
    let diasNumero = mesesNumero % 30;

    let anosNumero1 = Math.trunc(anosNumero)
    let mesesNumero1 = Math.trunc(mesesNumero)
    let diasNumero1 = Math.trunc(diasNumero)



    TempoFinalSemAcidentes.textContent = anosNumero1 + " anos, " + mesesNumero1 + " meses, " + diasNumero1 + " dias.";
}
btnCalculo10.onclick = function(){
    ativ10();
}

//=====================================================================


let salarioInicial = document.querySelector("#salarioInicial");
let btnCalculo11 = document.querySelector("#btnCalculo11");
let salarioFinal = document.querySelector("#salarioFinal");

function ativ11(){
    let salarioInicialNumber = Number(salarioInicial.value);

    let porcento1Salario = salarioInicialNumber / 100;
    let reajusteSalario = (porcento1Salario * 15) + salarioInicialNumber;
    let descontoSalario = reajusteSalario - ((reajusteSalario / 100) * 8)



    salarioFinal.textContent = "Salario inicial: " + salarioInicialNumber + ", Salario com aumento: " + reajusteSalario + ", Salario final: " + descontoSalario + ".";
}
btnCalculo11.onclick = function(){
    ativ11();
}

//=====================================================================


let numeroInteiro = document.querySelector("#numeroInteiro");
let btnCalculo12 = document.querySelector("#btnCalculo12");
let valoresFinais = document.querySelector("#valoresFinais");

function ativ12(){
    let numeroInteiroNumber = Number(numeroInteiro.value);

    let centenas = numeroInteiroNumber / 100;
    let sibraCentena = numeroInteiroNumber % 100;
    let centenasTruncado = Math.trunc(centenas);

    let dezenas = sibraCentena / 10;
    let dezenasTruncado = Math.trunc(dezenas);

    let sobraDezena = sibraCentena % 10;
    let sobraDezenaTruncado = Math.trunc(sobraDezena);




    valoresFinais.textContent = "Centena: " + centenasTruncado + ", Dezena: " + dezenasTruncado + ", Unidade: " + sobraDezenaTruncado + ".";
}
btnCalculo12.onclick = function(){
    ativ12();
}

//=====================================================================


let raio = document.querySelector("#raio");
let btnCalculo13 = document.querySelector("#btnCalculo13");
let areaPizzaTotal = document.querySelector("#areaPizzaTotal");

function ativ13(){
    let raioNumber = Number(raio.value);

    let area = (raioNumber ** 2) * 3.14;




    areaPizzaTotal.textContent = area;
}
btnCalculo13.onclick = function(){
    ativ13();
}

//=====================================================================


let valorAPagar = document.querySelector("#valorAPagar");
let btnCalculo14 = document.querySelector("#btnCalculo14");
let voaloresParaCada = document.querySelector("#voaloresParaCada");

function ativ14(){
    let valorAPagarNumber = Number(valorAPagar.value);

    let valorAPagarNumberReduzido = valorAPagarNumber.toFixed(2);

    let valorAPagarNumberDividido = valorAPagarNumberReduzido / 3;

    let valorAPagarNumberRemovido = Math.trunc(valorAPagarNumberDividido);

    let valorAPagarNumberSobra = valorAPagarNumberDividido - valorAPagarNumberRemovido;

    let sobraFinal = (valorAPagarNumberSobra * 3) + valorAPagarNumberRemovido;


    voaloresParaCada.textContent = "Carlos = " + valorAPagarNumberRemovido + ", André = " + valorAPagarNumberRemovido + ", Felipe = " + sobraFinal;

}
btnCalculo14.onclick = function(){
    ativ14();
}