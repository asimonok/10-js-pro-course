var input1 = document.querySelector('.first');
var input2 = document.querySelector('.second');
var select = document.querySelector('#operators');
var btnEl = document.querySelector('.calc');
btnEl.addEventListener('click', function () {
    var val1 = input1.value;
    var val2 = input2.value;
    var operator = select.value;
    var res = calculate(operator, parseFloat(val1), parseFloat(val2));
    printCalc(res);
});
var calculate = function (operator, val1, val2) {
    if (val2 === void 0) { val2 = 1; }
    switch (operator) {
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
};
var printCalc = function (result) {
    console.log(result);
};
