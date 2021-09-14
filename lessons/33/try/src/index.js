var input1 = document.querySelector(".number1");
var input2 = document.querySelector(".number2");
var button = document.querySelector(".button");
button.addEventListener("click", function () {
    var input1value = parseFloat(input1.value);
    var input2value = parseFloat(input2.value);
    consolePrint(calc(input1value, input2value));
});
var Operation;
(function (Operation) {
    Operation["sum"] = "+";
    Operation["subtraction"] = "-";
    Operation["division"] = "/";
    Operation["multiplication"] = "*";
})(Operation || (Operation = {}));
function consolePrint(res) {
    console.log(res);
}
function calc(a, b) {
    var select = document.getElementById("select").value;
    var calced = 0;
    switch (select) {
        case Operation.sum: {
            var calcSum = function (a, b) { return a + b; };
            calced = calcSum(a, b);
            break;
        }
        case Operation.subtraction: {
            var calcSubtraction = function (a, b) { return a - b; };
            calced = calcSubtraction(a, b);
            break;
        }
        case Operation.division: {
            var calcDivision = function (a, b) { return a / b; };
            calced = calcDivision(a, b);
            break;
        }
        case Operation.multiplication: {
            var calcMultiply = function (a, b) { return a * b; };
            calced = calcMultiply(a, b);
            break;
        }
        default: {
            break;
        }
    }
    return calced;
}
