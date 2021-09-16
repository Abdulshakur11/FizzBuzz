var elForm = document.querySelector(".form");
var elInput = elForm.querySelector(".fizzbuzz-input");
var elFizzBuzzResult = elForm.querySelector(".fizzbuzz-result");


elForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var inputNumber = parseInt(elInput.value.trim(), 10);
  var message = '';

  // if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
  //   message += "FizzBuzz";
  // } else if (inputNumber % 3 === 0) {
  //   message += "Fizz";
  // } else if (inputNumber % 5 === 0) {
  //   message += "Buzz";
  // } else {
  //   message = inputNumber;
  // }

  // elFizzBuzzResult.textContent = message;

  var operator = inputNumber % 3 === 0 && inputNumber % 5 === 0 ? 'FizzBuzz' : inputNumber % 3 === 0 ? 'Fizz' : inputNumber % 5 === 0 ? 'Buzz' : elFizzBuzzResult.textContent = inputNumber;
  elFizzBuzzResult.textContent = operator;

});