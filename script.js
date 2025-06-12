// Declaração de Variáveis
let segundos = 0;
let milissegundos = 0;
let intervalo = null;

const display = document.getElementById('display')
const iniciarBtn = document.getElementById('iniciarBtn')
const pausarBtn = document.getElementById('pausarBtn')
const resetarBtn = document.getElementById('resetarBtn')
const temaBtn = document.getElementById('tema')

iniciarBtn.addEventListener('click', start)
pausarBtn.addEventListener('click', pause)
resetarBtn.addEventListener('click', reset)
temaBtn.addEventListener('click', theme)

// Botão de trocar de tema
const cores = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#A833FF', '#33FFF5', '#F5FF33',];
let indiceCor = 0;
const corPadrao = 'rgba(31, 31, 31, 0.938)';

function theme() {
    document.body.style.backgroundColor = cores[indiceCor];
    indiceCor++;
    if (indiceCor > cores.length - 1){
        document.body.style.backgroundColor = corPadrao;
        indiceCor = 0;
    }
}

// Botão de iniciar cronômetro
function start() {
    if (intervalo) return; // Evita múltiplos intervalos

    intervalo = setInterval(() => {
        milissegundos += 10;
        if (milissegundos >= 1000){
            milissegundos = 0;
            segundos++;
        }
        atualizaDisplay();
    }, 10);
}

// Botão de pausar cronômetro
function pause() {
    clearInterval(intervalo);
    intervalo = null;
}

// Botão de resetar cronômetro
function reset() {
    pause();
    segundos = 0;
    milissegundos = 0;
    atualizaDisplay();
}

// Função de formatação de tempo
function formatarTempo(segundosTotais) {
    const minutos = Math.floor(segundosTotais / 60);
    const segundos = segundosTotais % 60;
    const centesimos = Math.floor(milissegundos / 10);

    return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}:${String(centesimos).padStart(2, '0')}`;
}

// Função que envia o tempo para a página
function atualizaDisplay() {
    display.textContent = formatarTempo(segundos, milissegundos);
}