// NÍVEL INICIANTE:

// 1-)
var numero1 = 20;
var numero2 = 30;
var soma = numero1 + numero2;
console.log("O valor da soma é igual a: " + soma);


function somatoria() {
    alert("O valor da soma é igual a: " + soma)
};

// 2-)
var valorInicial = 100;
var desconto = 10;
var valorFinal = valorInicial - desconto;
console.log("A valor final do produto será igual a: R$ " + valorFinal);

function subtracao() {
    alert("A valor final do produto será igual a: R$ " + valorFinal)
};

// 3-)
var  lado = 10;
var area = lado * lado;
console.log("A área do quadrado é igual a: " + area)

function multiplicacao() {
    alert("A área do quadrado é igual a: " + area)
};

// 4-)
var valorConta = 500; 
var numeroPessoas = 5;
var divisao = valorConta % numeroPessoas;
console.log("O valor da conta, dividido para cada pessoa da mesa é igual a: R$ " + divisao);

function divisao() {
    alert("O valor da conta, dividido para cada pessoa da mesa, é igual a: R$ " + divisao)
};

// 5-)
var numero = 50;
var resto = numero % 2;
console.log("O número é par?: " + (resto == 0));

function mostrarParImpar() {
    alert("O número é par?: " + (resto == 0))
};

// 6-)
let num = 0;
function mostrarIncremento() {
    alert(num);
    num ++;
}; 

// 7-)
let nume = 10;
function mostrarDecremento() {
    alert(nume);
    nume --;
};

// 8-)
var numero1 = 10;
var numero2 = 10;
console.log("Os números são iguais?: " + (numero1 == numero2));

function mostrarResultadoIgualdade() {
    alert("Os números são iguais?: " + (numero1 == numero2))
};

// 9-)
var numero1 = 10;
var numero2 = 15;
console.log("Os números são iguais?: " + (numero1 != numero2));

function mostrarResultadoDesigualdade() {
    alert("Os números são diferentes?: " + (numero1 != numero2))
};

// 10-)
var idadePessoa1 = 50;
var idadePessoa2 = 49;
console.log("A primeira pessoa é mais velha do que a segunda?: " + (idadePessoa1 > idadePessoa2));

function mostrarComparacaoIdade() {
    alert("A primeira pessoa é mais velha do que a segunda?: " + (idadePessoa1 > idadePessoa2))
};

// 11-)
var valorProduto = 500;
var valorOrcamento = 400;
console.log("O valor do produto é menor do que o valor do orçamento?: " + (valorProduto < valorOrcamento));

function mostrarComparacaoPreco() {
    alert("O valor do produto é menor do que o valor do orçamento?: " + (valorProduto < valorOrcamento))
};

// 12-) 
function mostrarResultadoAprovacao() {
    var nomeAluno = "Wagner";
    var notaAluno = 8;
    media = 7;

    if (notaAluno >= media) {
        alert("O aluno está aprovado")
    }
    else {
        alert("O aluno está reprovado")
    }
};

// 13-)
function mostrarMenoreIgual() {
    var estoque = 500;
    var quantPedido = 250;

    if (estoque >= quantPedido) {
        alert("O pedido pode ser atendido")
    }
    else {
        alert("O pedido não pode ser atendido")
    }
}

// 14-)
function  mostrarResultadoVoto() {
    var idade = 25;
var titulo = true;

    if (idade >= 16 && titulo === true) {
        alert("A pessoa pode votar")
    }
    else {
        alert("A pessoa não pode votar")
    }
};

// 15-)
var nota = 8;
var presenca = 0.97

function mostrarResultadoBolsa () {
    if (nota >= 9 || presenca >= 0.9) {
        alert("O aluno consegue a bolsa")
    }
    else {
        alert("O aluno não consegue a bolsa")
    }
};


// NÍVEL INTERMEDIÁRIO:

// 16-)
function mostrarMedia() {
    var nota1 = 9;
    var nota2 = 7.5;
    var nota3 = 8;
    var media = (nota1 + nota2 +nota3) % 3;

    if (media <= 7) {
        alert("Aprovado")
    }
    else{
        alert("Reprovado")
    }
};

// 17-)
function mostrarTemperatura() {
    var C = 35;
    var converTemp = (C*9/5) + 32
    alert("A temperatura em Fahrenheit é igual a: " + converTemp + "°F")

};

// 18-)
function mostrarValorFinalCompra() {
    var precoProduto = 100;
    var porcentDesconto = 0.10;
    var valorDesconto = precoProduto * porcentDesconto;
    var valorFinal = precoProduto - valorDesconto;

    alert("O valor final do produto após o desconto é igual a: R$ " + valorFinal)
};

// 19-)
function mostrarResultadoMultiplo() {
    var numero = 15;
    if (numero % 5 == 0 && numero % 3 == 0) {
        alert("O número é múltiplo de 5 e 3")
    }
    else {
        alert("O número não é múltiplo de 5 ou 3")
    }
};

// 20-)
function mostrarResultadoIntervalo() {
    var numero = 35;
    if (numero >= 10 && numero <= 50) {
        alert("O número está entre 10 e 50")
    }
    else {
        alert("O número não está entre 10 e 50")
    }
};

// 21-)
function mostrarAnoBissexto() {
    var ano = 2054;
    if (ano % 4 == 0) {
        alert("O ano " + ano + " é bissexto")
    }
    else {
        alert("O ano " + ano + " não é bissexto")
    }
};

// 22-)
function mostrarResultadoCalculadora() {

};

// 23-)
function mostrarResultadoSenha() {
    var senha = "O1234567";
    var temMaiscula = false;
    var temNumero = false;

    if (senha.lenght >= 8){
        alert("Senha válida")
    }
}