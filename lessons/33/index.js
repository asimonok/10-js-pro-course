const buttonEl = document.querySelector(".button");
var Operation;
(function (Operation) {
    Operation["sum"] = "plus";
    Operation["sub"] = "minus";
    Operation["mult"] = "multiplication";
    Operation["div"] = "division";
})(Operation || (Operation = {}));
let getResult = (res) => {
    console.log(res);
};
let calc = (a, b) => {
    const selectEl = document.querySelector("#operation");
    const selectElValue = selectEl.value;
    let result = 0;
    switch (selectElValue) {
        case Operation.sum:
            result = a + b;
            break;
        case Operation.sub:
            result = a - b;
            break;
        case Operation.mult:
            result = a * b;
            break;
        case Operation.div: {
            result = a / b;
            break;
        }
    }
    return result;
};
buttonEl.addEventListener("click", () => {
    const input1El = document.querySelector("#number1");
    const input2El = document.querySelector("#number2");
    const input1ElValue = parseFloat(input1El.value);
    const input2ElValue = parseFloat(input2El.value);
    getResult(calc(input1ElValue, input2ElValue));
});
