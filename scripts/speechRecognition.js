const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const attemptElement = document.getElementById("attempt");

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br';
recognition.addEventListener('result', onSpreak);
recognition.addEventListener('end', () => recognition.start());
recognition.start();

function onSpreak(e) {
  let attempt = e.results[0][0].transcript;
  console.log(attempt);
  createAttemptElement(attempt);
  validateAttempt(attempt);
}

function createAttemptElement(attempt) {
  const youSaid = document.createElement('div');
  youSaid.innerHTML = "Você disse:";

  const box = document.createElement('span');
  box.classList.add("box");
  box.innerHTML = attempt;

  attemptElement.textContent = '';
  attemptElement.appendChild(youSaid);
  attemptElement.appendChild(box);
}