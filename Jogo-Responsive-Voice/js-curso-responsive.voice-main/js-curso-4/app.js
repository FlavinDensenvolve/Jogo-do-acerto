let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 0;
const maxTentativas = 3;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//foi incluído o número de tentativas dentro do jogo com no máaximo 3, tendo a quarta tentativa, uma mensagem de voz é informada.

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value);
    tentativas++;

    //foi colocado a função voz, gerando uma voz feminina quando o jogador acertar.

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns 🥳');
        exibirTextoNaTela('p', 'Você é fera!');
        responsiveVoice.speak("Meus parabéns, você conseguiu acertar o número! Vamos para a próxima rodada?", "Brazilian Portuguese Female");
        document.getElementById('reiniciar').disabled = false;
    } else {
        if (tentativas >= maxTentativas) {
            exibirTextoNaTela('h1', 'Fim de jogo 😢');

            //Exibe uma mensagem que o jogo acabou, e uma voz feminina que o jogo acabou.

            exibirTextoNaTela('p', 'Infelizmente o jogo acabou, volte novamente.');
            responsiveVoice.speak("Infelizmente o jogo acabou, volte novamente.", "Brazilian Portuguese Female");
            document.getElementById('reiniciar').disabled = false;
        } else {
            if (chute < numeroSecreto) {
                exibirTextoNaTela('p', `O número secreto é maior. Tentativas restantes: ${maxTentativas - tentativas}`);
            } else {
                exibirTextoNaTela('p', `O número secreto é menor. Tentativas restantes: ${maxTentativas - tentativas}`);
            }
        }
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 0;
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    document.querySelector('input').value = '';
    document.getElementById('reiniciar').disabled = true;
}

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

// Exibir a mensagem inicial
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
document.getElementById('reiniciar').disabled = true;

//Melhorias no código dia 28/06/2024

//1. número de tentativas maxTentativas(3), e responsiVoice(Errou).

//Não foi constatado nenhum erro até o momento.,
