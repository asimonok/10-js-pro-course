const input1 = document.querySelector(".number1");
const input2 = document.querySelector(".number2");
const button = document.querySelector(".button");

//enum with operations
enum Operation {
  sum = "+",
  subtraction = "-",
  division = "/",
  multiplication = "*",
}

//function for printing result in console
function consolePrint(res: number): void {
  console.log(res);
}

// function for math operations
function calc(a: number, b: number): number {
  const select = (document.getElementById("select") as HTMLSelectElement).value;

  let calced: number = 0;
  switch (select) {
    case Operation.sum: {
      calced = a + b;
      break;
    }
    case Operation.subtraction: {
      calced = a - b;
      break;
    }
    case Operation.division: {
      calced = a / b;
      break;
    }
    case Operation.multiplication: {
      calced = a * b;
      break;
    }
    default: {
      break;
    }
  }

  return calced;
}

button.addEventListener("click", () => {
  // takes current values of input
  const input1value: number = parseFloat((input1 as HTMLInputElement).value);
  const input2value: number = parseFloat((input2 as HTMLInputElement).value);

  consolePrint(calc(input1value, input2value));
});
