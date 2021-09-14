//alert('Hello');
var inputEl1 = document.querySelector('.value1');
var inputEl2 = document.querySelector('.value2');
var buttonEl = document.querySelector('.btn');
var selectEl = document.querySelector('.operation');
var Operation;
(function (Operation) {
    Operation["sum"] = "+";
    Operation["sub"] = "-";
    Operation["div"] = "/";
    Operation["mul"] = "*";
})(Operation || (Operation = {}));
var calcSum = function (a, b) { return a + b; };
var calcSub = function (a, b) { return a - b; };
var calcDiv = function (a, b) { return a / b; };
var calcMult = function (a, b) { return a * b; };
buttonEl.addEventListener('click', function () {
    var inputVal1 = parseFloat(inputEl1.value);
    var inputVal2 = parseFloat(inputEl2.value);
    var selectVal = selectEl.value;
    var result = 0;
    switch (selectVal) {
        case Operation.sum: {
            result = calcSum(inputVal1, inputVal2);
            break;
        }
        case Operation.sub: {
            result = calcSub(inputVal1, inputVal2);
            break;
        }
        case Operation.div: {
            result = calcDiv(inputVal1, inputVal2);
            break;
        }
        case Operation.mul: {
            result = calcMult(inputVal1, inputVal2);
            break;
        }
    }
    console.log(result);
});
