const minValue = 0;
const maxValue = 100;
const secretNumber = generateRandomNumber(minValue, maxValue);

const lesserValue = document.getElementById("lesser-value");
const greaterValue = document.getElementById("greater-value");
lesserValue.innerHTML = minValue;
greaterValue.innerHTML = maxValue;

console.log(secretNumber);

function generateRandomNumber(minValue, maxValue) {
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
}