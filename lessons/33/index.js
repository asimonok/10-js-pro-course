var input1 = document.querySelector('.first');
var input2 = document.querySelector('.second');
var select = document.querySelector('#operators');
var btnEl = document.querySelector('.calc');
var Operators;
(function (Operators) {
    Operators["Minus"] = "minus";
    Operators["Plus"] = "plus";
    Operators["Devide"] = "devide";
    Operators["Multiply"] = "multiply";
})(Operators || (Operators = {}));
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
        case Operators.Minus:
            return val1 - val2;
        case Operators.Plus:
            return val1 + val2;
        case Operators.Devide:
            return val1 / val2;
        case Operators.Multiply:
            return val1 * val2;
        default:
            return;
    }
};
var printCalc = function (result) {
    console.log(result);
};
