// Atualiza os títulos
var subtitulo = document.querySelector(".subtitulo");
subtitulo.textContent = "Meus Animais";
var nutricao = document.querySelector(".titulo");
nutricao.textContent = "Ribeiro Nutrição";

// Acessa todas as linhas com a classe "paciente"
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];

    // Seleciona o conteúdo do peso e altura da tag
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    // Variáveis de validade
    var pesoValido = true;
    var alturaValida = true;

    // Validação do peso
    if (peso <= 0 || peso >= 1000) {
        pesoValido = false;
        var tdImc = paciente.querySelector(".info-imc");
        tdImc.textContent = "peso invalido";
        paciente.style.backgroundColor = "#DC143C"; // Muda o fundo para vermelho
        paciente.classList.add("Campo Invalido"); // Corrigido o uso de classList
    }

    // Validação da altura
    if (altura <= 0 || altura > 3.00) {
        alturaValida = false;
        var tdImc = paciente.querySelector(".info-imc");
        tdImc.textContent = "altura invalida";
        paciente.classList.add("Campo Invalido"); // Corrigido o uso de classList
    }

    // Só calcula o IMC se tanto o peso quanto a altura forem válidos
    if (pesoValido && alturaValida) {
        // Calcula o IMC
        var imc = peso / (altura * altura);

        // Atualiza o IMC na tabela
        var tdImc = paciente.querySelector(".info-imc");
        tdImc.textContent = imc.toFixed(1); // Arredonda para uma casa decimal
    }
}

// Adiciona evento para o título
nutricao.addEventListener('click', MostraMensagem);

// Função que exibe uma mensagem
function MostraMensagem() {
    alert("Essa merda foi clicada");
}
