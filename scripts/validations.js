function validateAttempt(attempt) {
  console.log("Estou validando");
  const number = +attempt;
  let resultMessage = '';

  if (isNotNumber(number)) {
    resultMessage = "Valor inválido!";
  }
  else if (isOutOfLimits(number)) {
    resultMessage = "Valor fora dos limites!";
  }
  else if (isRightNumber(number)) {
    createWinMessage();
    return;
  }
  else {
    resultMessage = checkDifference(number);
  }

  createResultElement(resultMessage);
}

function isNotNumber(number) {
  return Number.isNaN(number);
}

function isOutOfLimits(number) {
  return number > maxValue || number < minValue;
}

function isRightNumber(number) {
  return number === secretNumber;
}

function checkDifference(number) {
  if (number > secretNumber) {
    return `<div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>`;
  }

  return `<div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
}

function createResultElement(message) {
  const resultMessage = document.createElement('div');
  resultMessage.innerHTML = message;

  attemptElement.appendChild(resultMessage);
}

function createWinMessage() {
  document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número era ${secretNumber}</h3>
    <button class="play-again" id="play-again">Jogar Novamente</button>
  `;
}

document.body.addEventListener('click', e => {
  if (e.target.id === 'play-again')
    window.location.reload();
})