var value1 = document.querySelector(".first");
var value2 = document.querySelector(".second");
var selectEl = document.querySelector(".operator");
var button = document.querySelector(".button");
var resultEl = document.querySelector(".result");
var Operation;
(function (Operation) {
    Operation["sum"] = "sum";
    Operation["minus"] = "minus";
    Operation["multi"] = "multi";
    Operation["divide"] = "divide";
})(Operation || (Operation = {}));
var calcSum = function (a, b) { return a + b; };
var calcMinus = function (a, b) { return a - b; };
var calcMulti = function (a, b) { return a * b; };
var calcDevide = function (a, b) { return a / b; };
button.addEventListener('click', function () {
    var num1 = parseFloat(value1.value);
    var num2 = parseFloat(value2.value);
    var oper = selectEl.value;
    var result = 0;
    switch (oper) {
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
});
