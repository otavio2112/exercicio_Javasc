// NÍVEL INICIANTE:

// 1-)
function somatoria() {
    var numero1 = Number(prompt("Digite o 1° número: "));
    var numero2 = Number(prompt("Digite o 2° número: "));
    var soma = numero1 + numero2;
    
    alert("O valor da soma é igual a: " + soma)
};

// 2-)
function subtracao() {
    var valorInicial = Number(prompt("Digite o valor inicial do produto: "));
    var desconto = Number(prompt("Digite o valor do desconto: "));
    var valorFinal = valorInicial - desconto;

    alert("A valor final do produto será igual a: R$ " + valorFinal)
};

// 3-)
function multiplicacao() {
    var  lado = Number(prompt("Digite o valor do lado do quadrado: "));
    var area = lado * lado;

    alert("A área do quadrado é igual a: " + area)
};

// 4-)
function divisao() {
    var valorConta = Number(prompt("Informe o valor da conta: ")); 
    var numeroPessoas = Number(prompt("Informe o número de pessoas na mesa: "));
    var divisao = valorConta / numeroPessoas;

    alert("O valor da conta, dividido para cada pessoa da mesa, é igual a: R$ " + divisao)
};

// 5-)
function mostrarParImpar() {
    var numero = Number(prompt("Digite um número: "));
    var resto = numero % 2;

    if (resto == 0) {
        alert("O número " + numero + " é par")
    }
    else {
        alert("O número " + numero + " é ímpar")
    }
};

// 6-)
function mostrarIncremento() {
    let num = 0;

    alert(num);
    num ++;
}; 

// 7-)
function mostrarDecremento() {
    let nume = 10;

    alert(nume);
    nume --;
};

// 8-)
function mostrarResultadoIgualdade() {
    var numero1 = Number(prompt("Digite o 1° número: "));
    var numero2 = Number(prompt("Digite o 2° número: "));

    if (numero1 == numero2) {
        alert("Os números são iguais")
    }
    else {
        alert("Os números " + numero1 + " e " + numero2 + " são diferentes")
    }
};

// 9-)
function mostrarResultadoDesigualdade() {
    var numero1 = Number(prompt("Digite o 1° número: "));
    var numero2 = Number(prompt("Digite o 2° número: "));

    if (numero1 != numero2) {
        alert("Os números " + numero1 + " e " + numero2 + " são diferentes")
    }
    else {
        alert("Os números são iguais")
    }
};

// 10-)
function mostrarComparacaoIdade() {
    var idadePessoa1 = Number(prompt("Digite a idade da 1° pessoa: "));
    var idadePessoa2 = Number(prompt("Digite a idade da 2° pessoa: "));

    if (idadePessoa1 > idadePessoa2) {
        alert("A 1° pessoa é mais velha do que a 2° pessoa")
    }
    else if (idadePessoa1 == idadePessoa2) {
        alert("As duas pessoas têm a mesma idade")
    }
    else {
        alert("A 2° pessoa é mais velha do que a 1° pessoa")
    }
};

// 11-)
function mostrarComparacaoPreco() {
    var valorProduto = Number(prompt("Digite o valor do produto: "));
    var valorOrcamento = Number(prompt("Digite o valor do orçamento: "));

    if (valorProduto < valorOrcamento) {
        alert("É possível comprar o produto, pois o valor do produto é menor do que o valor do orçamento")
    }
    else {
        alert("Não é possível comprar o produto, pois o valor do produto é maior do que o valor do orçamento")
    }
};

// 12-) 
function mostrarResultadoAprovacao() {
    var nomeAluno = prompt("Digite o nome do aluno: ");
    var notaAluno = Number(prompt("Digite a nota do aluno: "));
    media = 7;

    if (notaAluno >= media) {
        alert("O aluno " + nomeAluno + " está aprovado")
    }
    else {
        alert("O aluno " + nomeAluno + " está reprovado")
    }
};

// 13-)
function mostrarMenoreIgual() {
    var estoque = Number(prompt("Informe a quantidade em estoque: "));
    var quantPedido = Number(prompt("Informe a quantidade do pedido: "));

    if (estoque >= quantPedido) {
        alert("O pedido pode ser atendido")
    }
    else {
        alert("O pedido não pode ser atendido")
    }
}

// 14-)
function  mostrarResultadoVoto() {
    var idade = Number(prompt("Informe a idade: "));
    var titulo = document.getElementById("temTitulo").checked;

    if (idade >= 16 && titulo) {
        alert("✅ Você pode votar!");
    } 
    else {
        alert("❌ Você não pode votar, pois não possui idade ou título de eleitor");
    }
};

// 15-)
function mostrarResultadoBolsa () {
    var nota = Number(prompt("Digite a nota do aluno: "));
    var presenca = Number(prompt("Digite a  porcentagem de presença do aluno: "));

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
    var nota1 = Number(prompt("Digite a 1° nota: "));
    var nota2 = Number(prompt("Digite a 2° nota: "));
    var nota3 = Number(prompt("Digite a 3° nota: "));
    var media = (nota1 + nota2 +nota3) / 3;

    if (media >= 7) {
        alert("Aprovado")
    }
    else{
        alert("Reprovado")
    }
};

// 17-)
function mostrarTemperatura() {
    var C = Number(prompt("Digite a temperatura em graus Celsius: "));
    var converTemp = (C*9/5) + 32

    alert("A temperatura " + C + " °C " + "em Fahrenheit é igual a: " + converTemp + "°F")

};

// 18-)
function mostrarValorFinalCompra() {
    var precoProduto = Number(prompt("Digite o valor do produto: "));
    var porcentDesconto = Number(prompt("Digite a porcentagem de desconto: "));
    var valorDesconto = precoProduto * porcentDesconto;

    if (precoProduto > 100) {
        valorFinal = precoProduto - valorDesconto;
    }
    else {
        valorFinal = precoProduto;
    }

    alert("O valor final do produto após o desconto é igual a: R$ " + valorFinal)
};

// 19-)
function mostrarResultadoMultiplo() {
    var numero = Number(prompt("Digite um número: "));

    if (numero % 5 == 0 && numero % 3 == 0) {
        alert("O número é múltiplo de 5 e 3")
    }
    else if (numero % 5 == 0) {
        alert("O número " + numero + " é múltiplo apenas de 5")
    }
    else if (numero % 3 == 0) {
        alert("O número " + numero + " é múltiplo apenas de 3")
    }
    else{
        alert("O número " + numero + " não é múltiplo de 5 e nem de 3")
    }
};

// 20-)
function mostrarResultadoIntervalo() {
    var numero = Number(prompt("Digite um número: "));

    if (numero >= 10 && numero <= 50) {
        alert("O número " + numero + " está entre 10 e 50")
    }
    else {
        alert("O número " + numero + " não está entre 10 e 50")
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
    var temMaiuscula = false;
    var temNumero = false;
    var letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeros = "1234567890";

    for (var char of senha) { 
        if (numeros.includes(char)) { 
            temNumero = true;
        }
        if (letrasMaiusculas.includes(char)) {
            temMaiuscula = true;
        }
    }

    if (senha.length >= 8 && temNumero && temMaiuscula) { 
        alert("Senha válida");
    } else {
        alert("Senha inválida");
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
    else if (numero3 == numero2 && numero2 == numero1) {
        alert("Os números são iguais")
    }
    else if (numero3 < numero1 && numero1 < numero2) {
        alert("A ordem de forma crescente é igual a: " + numero3 + ", " + numero1 + ", " + numero2)
    }
    else if (numero1 < numero3 && numero3 < numero2) {
        alert("A ordem de forma crescente é igual a: " + numero1 + ", " + numero3 + ", " + numero2)
    }
    else if (numero1 == numero3 && numero3 == numero2) {
        alert("Os números são iguais")
    }
    else if (numero1 < numero2 && numero2 < numero3) {
        alert("A ordem de forma crescente é igual a: " + numero1 + ", " + numero2 + ", " + numero3)
    }
    else if (numero2 < numero1 && numero1 < numero3) {
        alert("A ordem de forma crescente é igual a: " + numero2 + ", " + numero1 + ", " + numero3)
    }
    else if (numero2 == numero1 && numero1 == numero3) {
        alert("Os números são iguais")
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
function mostrarAdvinhacao() {
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
    var meses = Number(prompt("Informe o tempo do investimento, em meses: "));
    
    var montante = capital * Math.pow((1 + taxaJuros), meses);

    alert("O montante final do investimento será igual a: R$ " + montante.toFixed(2))
};