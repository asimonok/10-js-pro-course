const buttonEl = document.querySelector(".button") as HTMLButtonElement;

enum Operation {
  sum = "plus",
  sub = "minus",
  mult = "multiplication",
  div = "division",
}

let getResult = (res: number): void => {
  console.log(res);
};

let calc = (a: number, b: number): number => {
  const selectEl = document.querySelector("#operation") as HTMLSelectElement;
  const selectElValue: string = selectEl.value;
  let result: number = 0;

  switch (selectElValue) {
    case Operation.sum:
      result = a + b;
      break;
    case Operation.sub:
      result = a - b;
      break;
    case Operation.mult:
      result = a * b;
      break;
    case Operation.div: {
      result = a / b;
      break;
    }
  }
  return result;
};

buttonEl.addEventListener("click", () => {
  const input1El = document.querySelector("#number1") as HTMLInputElement;
  const input2El = document.querySelector("#number2") as HTMLInputElement;

  const input1ElValue: number = parseFloat(input1El.value);
  const input2ElValue: number = parseFloat(input2El.value);

  getResult(calc(input1ElValue, input2ElValue));
});
