var input1 = document.querySelector(".number1");
var input2 = document.querySelector(".number2");
var button = document.querySelector(".button");
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
button.addEventListener("click", function () {
    var input1value = parseFloat(input1.value);
    var input2value = parseFloat(input2.value);
    consolePrint(calc(input1value, input2value));
});
