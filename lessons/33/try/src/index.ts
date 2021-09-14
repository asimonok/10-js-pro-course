const input1 = document.querySelector(".number1");
const input2 = document.querySelector(".number2");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  const input1value: number = parseFloat((input1 as HTMLInputElement).value);
  const input2value: number = parseFloat((input2 as HTMLInputElement).value);

  //   calc(parseFloat((input1 as HTMLInputElement).value), parseFloat((input2 as HTMLInputElement).value));
  //   console.log(calc(input1value, input2value));
  // const result: number = calc(input1value, input2value);
  consolePrint(calc(input1value, input2value));
});

enum Operation {
  sum = "+",
  subtraction = "-",
  division = "/",
  multiplication = "*",
}

function consolePrint(res: number): void {
  console.log(res);
}

function calc(a: number, b: number): number {
  const select = (document.getElementById("select") as HTMLSelectElement).value;
  // const calced = a + select + b;
  let calced: number = 0;
  switch (select) {
    case Operation.sum: {
      const calcSum = (a: number, b: number): number => a + b;
      calced = calcSum(a, b);
      break;
    }
    case Operation.subtraction: {
      const calcSubtraction = (a: number, b: number): number => a - b;
      calced = calcSubtraction(a, b);
      break;
    }
    case Operation.division: {
      const calcDivision = (a: number, b: number): number => a / b;
      calced = calcDivision(a, b);
      break;
    }
    case Operation.multiplication: {
      const calcMultiply = (a: number, b: number): number => a * b;
      calced = calcMultiply(a, b);
      break;
    }
    default: {
      break;
    }
  }
  // return eval(calced);
  return calced;
}
