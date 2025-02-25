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
    var precoProduto = 157;
    var porcentDesconto = 0.10;
    var valorDesconto = precoProduto * porcentDesconto;
    if (precoProduto > 100) {
        valorFinal = precoProduto - valorDesconto;
    }
    else {
        valorFinal = precoProduto;
    }

    alert("O valor final do produto após o desconto é igual a: R$ " + valorFinal + ",00")
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
    var ano = Number(prompt("Digite o ano: "));
    if (ano % 4 == 0) {
        alert("O ano " + ano + " é bissexto")
    }
    else {
        alert("O ano " + ano + " não é bissexto")
    }
};

// 22-)
function mostrarResultadoCalculadora() {
    var numero1 = Number(prompt("Digite o primeiro número: "));
    var operador = prompt("Digite o operador: ");
    var numero2 = Number(prompt("Digite o segundo número: "));

    console.log(numero1, operador, numero2);
    var resultado;

    if (operador == "+") {
        resultado = numero1 + numero2;
        // console.log(typeof operador);
    }
    else if (operador == "-") {
        resultado = numero1 - numero2; 
    }
    else if (operador == "*") {
        resultado = numero1 * numero2;
    }
    else if (operador == "/") {
        if (numero2 !==0) {
            resultado = numero1 / numero2;
        }
        else {
            alert("Erro: divisão por zero")
        }
    }
    else{
        alert("Este operador é inválido");
    }
     alert("O resultado da conta é igual a: " + resultado);
};

// 23-)
function mostrarResultadoSenha() {
    var senha = prompt("Digite a senha: ");
    var temMaiscula = false;
    var temNumero = false;

    if (senha.lenght >= 8){
        alert("Senha válida")
    }
};

// 24-)
function mostrarTipoTriangulo() {
    var lado1 = Number(prompt("Digite a medida do 1° lado: "));
    var lado2 = Number(prompt("Digite a medida do 2° lado: "));
    var lado3 = Number(prompt("Digite a medida do 3° lado: "));

    if ((lado1 === lado2) && (lado1  === lado3)) {
        alert("Este triângulo é equilátero")
    }
    else if ((lado1 === lado2) || (lado1 === lado3) || (lado2 === lado3)) {
        alert("Este triângulo é isósceles")
    }
    else {
        alert("Este triângulo é escaleno")
    }
};

// 25-)
function mostrarClassificacaoIMC() {
    var peso = Number(prompt("Informe seu peso: "));
    var altura = Number(prompt("Informe sua altura: "));
    var imc = peso / (altura * altura);

    if (imc < 18.5) {
        alert("Você está abaixo do peso")
    }
    else if (18.5 <= imc && imc < 24.9) {
        alert("Você está no peso adequado")
    }
    else if (25 <= imc && imc < 29.9) {
        alert("Você está acima do peso: Obesidade I")
    }
    else if (30 <= imc && imc < 39.9) {
        alert("Você está acima do peso: Obesidade II")
    }
    else {
        alert("Você está acima do peso: Obesidade III")
    }

    alert("Seu IMC é igual a: " + imc.toFixed(2))
};


// NÍVEL AVANÇADO:

// 26-)
function  mostrarNumerosOrdenados() {
    numero1 = Number(prompt("Informe o 1° número: "));
    numero2 = Number(prompt("Informe o 2° número: "));
    numero3 = Number(prompt("Informe o 3° número: "));

    
    if (numero2 < numero3 && numero3 < numero1) {
        alert("A ordem de forma crescente é igual a: " + numero2 + ", " + numero3 + ", " + numero1)
    }
    else if (numero3 < numero2 && numero2 < numero1) {
        alert("A ordem de forma crescente é igual a: " + numero3 + ", " + numero2 + ", " + numero1)
    }
    else if (numero3 < numero1 && numero1 < numero2) {
        alert("A ordem de forma crescente é igual a: " + numero3 + ", " + numero1 + ", " + numero2)
    }
    else if (numero1 < numero3 && numero3 < numero2) {
        alert("A ordem de forma crescente é igual a: " + numero1 + ", " + numero3 + ", " + numero2)
    }
    else if (numero1 < numero2 && numero2 < numero3) {
        alert("A ordem de forma crescente é igual a: " + numero1 + ", " + numero2 + ", " + numero3)
    }
    else if (numero2 < numero1 && numero1 < numero3) {
        alert("A ordem de forma crescente é igual a: " + numero2 + ", " + numero1 + ", " + numero3)
    }
};

// 27-)
function mostrarRaízes() {
    var a = Number(prompt("Informe o valor de a: "));
    var b = Number(prompt("Informe o valor de b: "));
    var c = Number(prompt("Informe o valor de c: "));

    var delta = ((b * b) - 4 * a * c);
    if (delta < 0) {
        alert("Não há raízes reais, pois o delta é menor que 0")
    }
    else {
        var raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        var raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
    }
    alert("Os valores das raízes são, respectivamente: " + raiz1 + " e " + raiz2)
};

// 28-)
function mostrarAdvinhação() {
var numeroSorteado = Math.floor(Math.random () * 100) + 1;
var tentativas = 0;
var chute;

do {
    chute = Number(prompt("Digite um número: "));
    tentativas++;
    if (chute > numeroSorteado) {
        alert("Chute muito alto!")
    }
    else if(chute < numeroSorteado) {
        alert("Chute muito baixo!")
    }
}

while (chute !== numeroSorteado);

alert("Parabéns!!!, você acertou o número em " + tentativas + " tentativas")
};

// 29-)
function conversãoBases() {
    var numero = Number(prompt("Digite um número: "));
    var baseEscolhida = (prompt("Escolha a base desejada(1 para binário e 2 para hexadecimal): "));
    
    if (baseEscolhida == "1") {
        alert("O número " + numero + " em binário é igual a: " + numero.toString(2))
    }
    else if (baseEscolhida == "2") {
        alert("O número " + numero + " em hexadecimal é igual a: " + numero.toString(16))
    }
    else {
        alert("Opção inválida")
    }
};    

// 30-)
function calculadoraJurosCompostos() {
    var capital = Number(prompt("Informe o valor do capital: R$ "));
    var taxaJuros = Number(prompt("Informe a taxa de juros do investimento: "));
    var meses = Number(prompt("Inform o tempo do investimento, em meses: "));
    
    var montante = capital * Math.pow((1 + taxaJuros), meses);

    alert("O montante final do investimento será igual a: R$ " + montante.toFixed(2))
};