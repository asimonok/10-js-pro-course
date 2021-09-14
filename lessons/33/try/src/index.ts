const input1 = document.querySelector(".number1");
const input2 = document.querySelector(".number2");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  //
  const input1value: number = parseFloat((input1 as HTMLInputElement).value);
  const input2value: number = parseFloat((input1 as HTMLInputElement).value);

  //   calc(parseFloat((input1 as HTMLInputElement).value), parseFloat((input2 as HTMLInputElement).value));
  //   console.log(calc(input1value, input2value));
  const result: number = calc(input1value, input2value);
  consolePrint(result);
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
  const calced = a + select + b;
  return eval(calced);
}
