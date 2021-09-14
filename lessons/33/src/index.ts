//alert('Hello');

const inputEl1 = document.querySelector('.value1') as HTMLInputElement;
const inputEl2 = document.querySelector('.value2') as HTMLInputElement;
const buttonEl = document.querySelector('.btn') as HTMLButtonElement;
const selectEl = document.querySelector('.operation') as HTMLSelectElement;

enum Operation {
  sum = '+',
  sub = '-',
  div = '/',
  mul = '*',
}

const calcSum = (a: number, b: number): number => a + b;
const calcSub = (a: number, b: number): number => a - b;
const calcDiv = (a: number, b: number): number => a / b;
const calcMult = (a: number, b: number): number => a * b;

buttonEl.addEventListener('click', () => {
  const inputVal1: number = parseFloat(inputEl1.value);
  const inputVal2: number = parseFloat(inputEl2.value);
  const selectVal: string = selectEl.value;
  let result: number = 0;

  switch (selectVal) {
    case Operation.sum: {
      result = calcSum(inputVal1, inputVal2);
      break;
    }
    case Operation.sub: {
      result = calcSub(inputVal1, inputVal2);
      break;
    }
    case Operation.div: {
      result = calcDiv(inputVal1, inputVal2);
      break;
    }
    case Operation.mul: {
      result = calcMult(inputVal1, inputVal2);
      break;
    }
  }

  console.log(result);
});
