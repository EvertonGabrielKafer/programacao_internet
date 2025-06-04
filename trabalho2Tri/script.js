document.addEventListener("DOMContentLoaded", function () {
    let lado1 = document.querySelector("#lado1");
    let lado2 = document.querySelector("#lado2");
    let lado3 = document.querySelector("#lado3");
    let btnCalculo1 = document.querySelector("#btnCalculo1");
    let tipoTriangulo = document.querySelector("#tipoTriangulo");

    function ativ1() {
        let lado1Number = Number(lado1.value);
        let lado2Number = Number(lado2.value);
        let lado3Number = Number(lado3.value);

        let somaLados1e2 = (lado1Number + lado2Number);
        let somaLados2e3 = (lado2Number + lado3Number);
        let somaLados3e1 = (lado3Number + lado1Number);

        if (lado3Number > somaLados1e2) {
            tipoTriangulo.textContent = "Não é triangulo!";
        } else if (lado1Number > somaLados2e3) {
            tipoTriangulo.textContent = "Não é triangulo!!";
        } else if (lado2Number > somaLados3e1) {
            tipoTriangulo.textContent = "Não é triangulo!!!";
        } else if (lado1Number === lado2Number && lado2Number === lado3Number) {
            tipoTriangulo.textContent = "Equilatero";
        } else if (lado1Number === lado2Number || lado2Number === lado3Number || lado3Number === lado1Number) {
            tipoTriangulo.textContent = "Isoceles";
        } else {
            tipoTriangulo.textContent = "Escaleno";
        };

    }
    btnCalculo1.onclick = function () {
        ativ1();
    }
});
//=====================================================================

document.addEventListener("DOMContentLoaded", function () {
    let peso = document.querySelector("#peso");
    let altura = document.querySelector("#altura");
    let btnCalculo2 = document.querySelector("#btnCalculo2");
    let imc = document.querySelector("#imc");

    function ativ2() {
        try {
            let pesoNumber = Number(peso.value);
            let alturaNumber = Number(altura.value);

            let calculoimc = pesoNumber / (alturaNumber ** 2);
            let calculoimcFixed = calculoimc.toFixed(1)

            let listaclasificacao1 = '<h3>Clasificação:</h3>';
            let listaclasificacao2 = '<li>Abaixo de 18.5 → Abaixo do peso</li><li>18.5 a 24.9 → Peso normal+</li><li>25 a 29.9 → Sobrepeso+</li><li>30 a 34.9 → Obesidade grau 1+</li><li>35 a 39.9 → Obesidade grau 2+</li><li>40+ → Obesidade grau 3+</li>';

            imc.innerHTML = "<h2> Seu IMC é: " + calculoimcFixed + "</h2>" + listaclasificacao1 + listaclasificacao2;
        } catch (error) {
            console.error("Erro ao calcular IMC: ", error.message)
        }

    }
    btnCalculo2.onclick = function() {
        ativ2();
    }
});
//=====================================================================

document.addEventListener("DOMContentLoaded", function () {
    let anoVeiculo = document.querySelector("#anoVeiculo");
    let tabelaFipe = document.querySelector("#tabelaFipe");
    let btnCalculo3 = document.querySelector("#btnCalculo3");
    let valorImpostoVeiculo = document.querySelector("#valorImpostoVeiculo");

    function ativ3() {

        let anoVeiculoNumber = Number(anoVeiculo.value);
        let tabelaFipeNumber = Number(tabelaFipe.value);

        if (anoVeiculoNumber < 1990) {
            let valorImposto1porcento = tabelaFipeNumber / 100;

            valorImpostoVeiculo.textContent = valorImposto1porcento
        } else {
            let valorImposto15porcento = (tabelaFipeNumber / 100) * 1.5;

            valorImpostoVeiculo.textContent = valorImposto15porcento + " reais"
        }




    }
    btnCalculo3.onclick = function () {
        ativ3();
    }
});
//=====================================================================

document.addEventListener("DOMContentLoaded", function () {
    let salarioAntigo = document.querySelector("#salarioAntigo");
    let cargoSelect = document.querySelector("#cargoSelect");
    let btnCalculo4 = document.querySelector("#btnCalculo4");
    let salarioFinal = document.querySelector("#salarioFinal");

    function ativ4() {

        let salarioAntigoNumber = Number(salarioAntigo.value);
        let cargoSelectNumber = String(cargoSelect.value);

        //salarioFinal.textContent = cargoSelectNumber

        let diferncaSalario = (salarioAntigoNumber / 100) * cargoSelectNumber;

        let salarioNovo = salarioAntigoNumber + diferncaSalario

        salarioFinal.classList.add("resultado-verde");
        salarioFinal.innerHTML = "<p>Salário antigo = " + salarioAntigoNumber + "</p>" + "<h3>Novo salário = " + salarioNovo + ", Após acrésimo de " + diferncaSalario + " reais" + "</h3>"


    }
    btnCalculo4.onclick = function () {
        ativ4();
    }
});
//=====================================================================

document.addEventListener("DOMContentLoaded", function () {
    let saldoMedio = document.querySelector("#saldoMedio");
    let btnCalculo5 = document.querySelector("#btnCalculo5");
    let valorFinalSaldo = document.querySelector("#valorFinalSaldo");

    function ativ5() {

        let saldoMedioNumber = Number(saldoMedio.value);

        let percentualCredito;
        let saldoMedioNumberUm = saldoMedioNumber / 100;
        let saldoFinal;

        if (saldoMedioNumber < 201) {
            percentualCredito = 0;
            saldoFinal = saldoMedioNumberUm - saldoMedioNumberUm;
            valorFinalSaldo.innerHTML = "<p>Saldo médio = " + saldoMedioNumber + "</p>" + "<h3>Crédito disponivel = " + saldoFinal + " reais" + "</h3>"
        } else if (saldoMedioNumber < 401) {
            percentualCredito = 20;
            saldoFinal = saldoMedioNumberUm * percentualCredito;
            valorFinalSaldo.innerHTML = "<p>Saldo médio = " + saldoMedioNumber + "</p>" + "<h3>Crédito disponivel = " + saldoFinal + " reais" + "</h3>"
        } else if (saldoMedioNumber < 601) {
            percentualCredito = 30;
            saldoFinal = saldoMedioNumberUm * percentualCredito;
            valorFinalSaldo.innerHTML = "<p>Saldo médio = " + saldoMedioNumber + "</p>" + "<h3>Crédito disponivel = " + saldoFinal + " reais" + "</h3>"
        } else if (saldoMedioNumber > 601) {
            percentualCredito = 40;
            saldoFinal = saldoMedioNumberUm * percentualCredito;
            valorFinalSaldo.innerHTML = "<p>Saldo médio = " + saldoMedioNumber + "</p>" + "<h3>Crédito disponivel = " + saldoFinal + " reais" + "</h3>"
        };







    }
    btnCalculo5.onclick = function () {
        ativ5();
    }
});
//=====================================================================

document.addEventListener("DOMContentLoaded", function () {
    let quantidadeLanche = document.querySelector("#quantidadeLanche");
    let lancheSelect = document.querySelector("#lancheSelect");
    let btnCalculo6 = document.querySelector("#btnCalculo6");
    let valorFinalLanche = document.querySelector("#valorFinalLanche");

    function ativ6() {

        let quantidadeLancheNumber = Number(quantidadeLanche.value);
        let lancheSelectNumber = Number(lancheSelect.value);

        let totalLanche = lancheSelectNumber * quantidadeLancheNumber;

        valorFinalLanche.textContent = totalLanche + " reais"


    }
    btnCalculo6.onclick = function () {
        ativ6();
    }
});
//=====================================================================

document.addEventListener("DOMContentLoaded", function () {
    let valorProduto = document.querySelector("#valorProduto");
    let pagamentoSelect = document.querySelector("#pagamentoSelect");
    let btnCalculo7 = document.querySelector("#btnCalculo7");
    let valorFinalproduto = document.querySelector("#valorFinalproduto");

    function ativ7() {

        let valorProdutoNumber = Number(valorProduto.value);
        let pagamentoSelectNumber = String(pagamentoSelect.value);

        let valorProdutoTotal;

        if (pagamentoSelectNumber === "1") {
            valorProdutoTotal = valorProdutoNumber - ((valorProdutoNumber / 100) * 10);
            valorFinalproduto.textContent = valorProdutoTotal + " reais"
        } else if (pagamentoSelectNumber === "2") {
            valorProdutoTotal = valorProdutoNumber - ((valorProdutoNumber / 100) * 15);
            valorFinalproduto.textContent = valorProdutoTotal + " reais"
        } else if (pagamentoSelectNumber === "3") {
            valorFinalproduto.textContent = valorProdutoNumber + " reais"
        } else if (pagamentoSelectNumber === "4") {
            valorProdutoTotal = ((valorProdutoNumber / 100) * 10) + valorProdutoNumber;
            valorFinalproduto.textContent = valorProdutoTotal + " reais"
        };





    }
    btnCalculo7.onclick = function () {
        ativ7();
    }
});
//=====================================================================

document.addEventListener("DOMContentLoaded", function () {
    let qtdHoraAula = document.querySelector("#qtdHoraAula");
    let nivelProfessor = document.querySelector("#nivelProfessor");
    let btnCalculo8 = document.querySelector("#btnCalculo8");
    let salarioProfessorFinal = document.querySelector("#salarioProfessorFinal");

    function ativ8() {

        let qtdHoraAulaNumber = Number(qtdHoraAula.value);
        let nivelProfessorNumber = String(nivelProfessor.value);

        let qtdHoraAulaTotal;

        if (nivelProfessorNumber === "n1") {
            qtdHoraAulaTotal = qtdHoraAulaNumber * 12 * 4.5;
            salarioProfessorFinal.textContent = qtdHoraAulaTotal + " reais"
        } else if (nivelProfessorNumber === "n2") {
            qtdHoraAulaTotal = qtdHoraAulaNumber * 17 * 4.5;
            salarioProfessorFinal.textContent = qtdHoraAulaTotal + " reais"
        } else if (nivelProfessorNumber === "n3") {
            qtdHoraAulaTotal = qtdHoraAulaNumber * 25 * 4.5;
            salarioProfessorFinal.textContent = qtdHoraAulaTotal + " reais"
        };

    }
    btnCalculo8.onclick = function () {
        ativ8();
    }
});
//=====================================================================
