const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

let segundos = 0;
let intervalo = null;

const formatarTempo = (totalSegundos) => {
  const minutos = Math.floor(totalSegundos / 60);
  const segundosRestantes = totalSegundos % 60;
  // Formata com zero à esquerda
  return `${String(minutos).padStart(2, '0')}:${String(segundosRestantes).padStart(2, '0')}`;
};

const atualizarDisplay = () => {
  display.textContent = formatarTempo(segundos);
};

const iniciarCronometro = () => {
  if (intervalo) return; // Evita múltiplos intervalos ao clicar várias vezes
  intervalo = setInterval(() => {
    segundos++;
    atualizarDisplay();
  }, 1000);
};

const pausarCronometro = () => {
  clearInterval(intervalo);
  intervalo = null;
};

const resetarCronometro = () => {
  pausarCronometro();
  segundos = 0;
  atualizarDisplay();
};

startBtn.addEventListener('click', iniciarCronometro);
pauseBtn.addEventListener('click', pausarCronometro);
resetBtn.addEventListener('click', resetarCronometro);