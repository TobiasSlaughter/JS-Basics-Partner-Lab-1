let firstNumber = prompt("Give me a number");
let secondNumber = prompt("Give me a second number");
let result = firstNumber / secondNumber;
console.log(result);

if (result % 3 == 0 && result % 5 == 0) {
  console.log("FizzBuzz");
} else if (result % 3 == 0) {
  console.log("Fizz");
} else if (result % 5 == 0) {
  console.log("Buzz");
}
