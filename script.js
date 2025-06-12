// Declaração de Variáveis
let = segundos = 0;
let = intervalo = null;

const display = document.getElementById('display')
const iniciarBtn = document.getElementById('iniciarBtn')
const pausarBtn = document.getElementById('pausarBtn')
const resetarBtn = document.getElementById('resetarBtn')

iniciarBtn.addEventListener('click', start)
pausarBtn.addEventListener('click', pause)
resetarBtn.addEventListener('click', reset)

// Botão de iniciar cronômetro
function start(){
    if (intervalo) return; // Evita que existam múltiplos intervalos

    intervalo = setInterval(() => {
    segundos++;
    atualizaDisplay();
    }, 1000)
}

// Botão de pausar cronômetro
function pause(){
    clearInterval(intervalo);
    intervalo = null;

}

// Botão de resetar cronômetro
function reset(){
    pause();
    segundos = 0;
    atualizaDisplay();
}

// Funçao de formatação de tempo
function formatarTempo(segundosTotais){
    const minutos = Math.floor(segundosTotais / 60)
    const segundos = segundosTotais % 60;
    return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`
}

// Função que envia o tempo para página
function atualizaDisplay() {
    display.textContent = formatarTempo(segundos)
}