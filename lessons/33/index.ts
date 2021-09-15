
const input1 = document.querySelector('.first') as HTMLInputElement;
const input2 = document.querySelector('.second') as HTMLInputElement;
const select = document.querySelector('#operators') as HTMLSelectElement;
const btnEl = document.querySelector('.calc') ;

enum Operator{
    'minus',
    'plus',
    'devide',
    'multiply'
}

btnEl.addEventListener('click', () => {
    const val1 = input1.value;
    const val2 = input2.value;
    const operator:string = select.value;

    let res = calculate(operator, parseFloat(val1), parseFloat(val2));

    printCalc(res);
})

const calculate = (operator: string, val1:number, val2: number = 1): any => {
    switch(operator) {
        case 'minus':
            return val1 - val2;
        case 'plus':
            return val1 + val2;
        case 'devide':
            return val1 / val2;
        case 'multiply':
            return val1 * val2;
        default: 
            return;    
    }
}

const printCalc = (result: number): void => {
    console.log(result);
}








