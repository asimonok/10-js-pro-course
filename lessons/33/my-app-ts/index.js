var input1El = document.querySelector(".input-1");
var input2El = document.querySelector(".input-2");
var buttonEl = document.querySelector(".submit-button");
var selectEl = document.querySelector(".operation-select");
var calcAdd = function (a, b) { return a + b; };
var calcSub = function (a, b) { return a - b; };
var calcDiv = function (a, b) { return a / b; };
var calcMult = function (a, b) { return a * b; };
var Operation;
(function (Operation) {
    Operation["add"] = "add";
    Operation["sub"] = "sub";
    Operation["div"] = "div";
    Operation["mult"] = "mult";
})(Operation || (Operation = {}));
buttonEl.addEventListener("click", function () {
    var input1Value = parseFloat(input1El.value);
    var input2Value = parseFloat(input2El.value);
    var selectValue = selectEl.value;
    var result = 0;
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
//# sourceMappingURL=index.js.map