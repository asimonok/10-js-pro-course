const value1 = document.querySelector(".first") as HTMLInputElement;
const value2 = document.querySelector(".second") as HTMLInputElement;
const selectEl = document.querySelector(".operator") as HTMLSelectElement;
const button = document.querySelector(".btn");
const resultEl = document.querySelector(".result");

enum Operation {
    sum = "sum",
    minus = "minus", 
    multi = "multi",
    divide = "divide" 
}

const calcSum = (a:number, b:number): number => a + b;
const calcMinus = (a:number, b:number): number => a - b;
const calcMulti = (a:number, b:number): number => a * b;
const calcDevide = (a:number, b:number): number => a / b;

button.addEventListener('click', () => {

    const num1: number = parseFloat(value1.value);
    const num2: number = parseFloat(value2.value);
    const oper: string = selectEl.value;

    let result: number = 0;

    switch(oper){
        case Operation.sum:
            result = calcSum(num1, num2);
            break;
        case Operation.minus:
            result = calcMinus(num1, num2);
            break;
        case Operation.multi:
            result = calcMulti(num1, num2);
            break;
        case Operation.divide:
            result = calcDevide(num1, num2);
            break;
        }
    console.log(result);

    resultEl.innerHTML = String(result);
} )