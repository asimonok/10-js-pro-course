//alert('Hello');
var inputEl1 = document.querySelector('.value1');
var inputEl2 = document.querySelector('.value2');
var buttonEl = document.querySelector('.btn');
var selectEl = document.querySelector('.operation');
var Operations;
(function (Operations) {
    Operations["SUM"] = "+";
    Operations["SUB"] = "-";
    Operations["DIV"] = "/";
    Operations["MUL"] = "*";
})(Operations || (Operations = {}));
var calcSum = function (a, b) { return a + b; };
var calcSub = function (a, b) { return a - b; };
var calcDiv = function (a, b) { return a / b; };
var calcMult = function (a, b) { return a * b; };
buttonEl.addEventListener('click', function () {
    var inputVal1 = parseFloat(inputEl1.value);
    var inputVal2 = parseFloat(inputEl2.value);
    var selectVal = selectEl.value;
    var result = 0;
    if (isNaN(inputVal1) || isNaN(inputVal2)) {
        console.log('Please, enter the values');
        return;
    }
    switch (selectVal) {
        case Operations.SUM: {
            result = calcSum(inputVal1, inputVal2);
            break;
        }
        case Operations.SUB: {
            result = calcSub(inputVal1, inputVal2);
            break;
        }
        case Operations.DIV: {
            result = calcDiv(inputVal1, inputVal2);
            break;
        }
        case Operations.MUL: {
            result = calcMult(inputVal1, inputVal2);
            break;
        }
    }
    console.log(result);
});
