//alert('Hello');

const inputEl1 = document.querySelector('.value1') as HTMLInputElement;
const inputEl2 = document.querySelector('.value2') as HTMLInputElement;
const buttonEl = document.querySelector('.btn') as HTMLButtonElement;
const selectEl = document.querySelector('.operation') as HTMLSelectElement;

enum Operations {
  SUM = '+',
  SUB = '-',
  DIV = '/',
  MUL = '*',
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

  if (isNaN(inputVal1) || isNaN(inputVal2)) {
    console.log('Please, enter the values');
    return;
  }

  switch (selectVal) {
    case Operations.SUM: {
      result = calcSum(inputVal1, inputVal2);
      break;
    }
    case Operations.SUB: {
      result = calcSub(inputVal1, inputVal2);
      break;
    }
    case Operations.DIV: {
      result = calcDiv(inputVal1, inputVal2);
      break;
    }
    case Operations.MUL: {
      result = calcMult(inputVal1, inputVal2);
      break;
    }
  }

  console.log(result);
});
