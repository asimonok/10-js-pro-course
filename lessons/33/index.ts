const number1 = document.querySelector('.first') as HTMLInputElement;
const number2 = document.querySelector('.second') as HTMLInputElement;
const operator = document.querySelector('.operator') as HTMLSelectElement;
const button = document.querySelector('.button');
const result = document.querySelector(".result");

enum Operation {
  sum = "+",
  minus = "-",
  multi = "*",
  divide = "/"
}

const calcSum = (a: number, b: number): number => a + b;
const calcMinus = (a: number, b: number): number => a - b;
const calcMulti = (a: number, b: number): number => a * b;
const calcDivide = (a: number, b: number): number => a / b;

button.addEventListener('click', () => {

  const numb1: number = parseFloat(number1.value);
  const numb2: number = parseFloat(number2.value);
  const operat: string = operator.value;
  console.log(numb1);
  console.log(numb2);

  let result: number = 0;

  switch (operat) {
    case Operation.sum:
      result = calcSum(numb1, numb2);
      break;
    case Operation.minus:
      result = calcMinus(numb1, numb2);
      break;
    case Operation.multi:
      result = calcMulti(numb1, numb2);
      break;
    case Operation.divide:
      result = calcDivide(numb1, numb2);
      break;
  }
  console.log(result);
  alert(result);
})