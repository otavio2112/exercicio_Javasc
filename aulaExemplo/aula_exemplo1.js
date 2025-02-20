// DECLARANDO VARIÁVEIS COM DIFERENTES TIPOS DE DADOS
var nome = "João"; // String = Variável de tipo texto
var idade = 30; // Number = Variável de tipo número
var ehEstudante = false; //Boolean = Verdadeiro ou falso

// Criando uma frase combinando as variáveis
var apresentacao = "Meu nome é " + nome + " e eu tenho " + idade + " anos.";

// Imprimindo a frase no console
console.log(apresentacao); // Output: Meu nome é João e eu tenhos 30 anos.
// alert(apresentacao); A mensagem aparece em forma de pop-up



// OPERADORES ARITMÉTICOS

// Calculando a área de um retângulo
var largura = 5;
var altura = 10;
var area = largura * altura;

// Output:  A área do retângulo é igual a: 50
console.log("A área do retângulo é igual a: " + area);


// Calculando o resto da divisão
var numero = 25;
var resto = numero % 4;

// Output: O resto da divisão é igual a: 1
console.log("O resto da divisão é igual a: " + resto);

// Usando operadores de incremento e atribuição
var contador = 0;
contador++; // Incrementa em 1 (contador agora é 1)
contador+= 5; // Adiciona 5 (contador agora é 6)

// Ouput: O valor final do contador é igual a: 6
console.log("O valor final do contador é igual a: " + contador);


function mostrarResultado() { // Mostrará o resultado no HTML
    alert(apresentacao);
}



// COMPARANDO NÚMEROS
var numero1 = 10;
var numero2 = 15;

console.log("numero1 == numero2: " + (numero1 == numero2)); // Output: numero1 == numero2: false
console.log("numero1 != numero2: " + (numero1 != numero2)); // Output: numero1 != numero2: true
console.log("numero1 > numero2: " + (numero1 > numero2)); // Output: numero1 > numero2: false
console.log("numero1 < numero2: " + (numero1 < numero2)); // Output: numero1 < numero2: true
console.log("numero1 >= numero2: " + (numero1 >= numero2)); // Output: numero1 >= numero2: false
console.log("numero1 <= numero2: " + (numero1 <= numero2)); // Output: numero1 <= numero2: true



// COMPARANDO NÚMEROS E STRINGS
var numero3 = 10; // É um Number
var numero4 = "10"; // É uma String

// Output: numero3 == numero4: true (compara só o valor)
console.log("numero3 == numero4: " + (numero3 == numero4));

// Output: numero3 === numero4: false (compara o valor e a o tipo)
console.log("numero3 === numero4: " + (numero3 === numero4));



// COMBINANDO CONDIÇÕES BOOLEANAS
var temPermissao = true;
var ehAdministrador = false;

// Output: temPermissao && ehAdministrador: false
console.log("temPermissao && ehAdministrador: " + (temPermissao && ehAdministrador)); // && = e, ou seja, é necessário ter a permissão e ser administrador - é necessário ambos os requesitos para ser TRUE.

// Output: temPermissao || ehAdministrador: true
console.log("temPermissao || ehAdministrador: " + (temPermissao || ehAdministrador)); // || = ou, ou seja, é necessário ter a permissão ou ser administrador  - é necessário ter apenas um requesito para ser TRUE.

// Output: !temPermissao: false
console.log("!temPermissao: " + (!temPermissao)); // ! = inverte o resultado, ou seja, ser tiver a permissão o resultado da resposta será diferente da do VAR, como nesse caso ele tem a permissão o resultado é o contrário, ou seja, FALSE.