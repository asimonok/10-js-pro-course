const input1El = document.querySelector(".input-1") as HTMLInputElement;
const input2El = document.querySelector(".input-2") as HTMLInputElement;
const buttonEl = document.querySelector(".submit-button") as HTMLButtonElement;
const selectEl = document.querySelector(
  ".operation-select"
) as HTMLSelectElement;

const calcAdd = (a: number, b: number): number => a + b;
const calcSub = (a: number, b: number): number => a - b;
const calcDiv = (a: number, b: number): number => a / b;
const calcMult = (a: number, b: number): number => a * b;

enum Operation {
  add = "add",
  sub = "sub",
  div = "div",
  mult = "mult",
}

buttonEl.addEventListener("click", () => {
  const input1Value: number = parseFloat(input1El.value);
  const input2Value: number = parseFloat(input2El.value);
  const selectValue: string = selectEl.value;
  let result: number = 0;

  switch (selectValue) {
    case Operation.add: {
      result = calcAdd(input1Value, input2Value);
      break;
    }
    case Operation.sub: {
      result = calcSub(input1Value, input2Value);
      break;
    }
    case Operation.div: {
      result = calcDiv(input1Value, input2Value);
      break;
    }
    case Operation.mult: {
      result = calcMult(input1Value, input2Value);
      break;
    }
    default: {
      alert("error");
    }
  }

  alert(result);
});
