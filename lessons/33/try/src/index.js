var input1 = document.querySelector(".number1");
var input2 = document.querySelector(".number2");
var button = document.querySelector(".button");
button.addEventListener("click", function () {
    var input1value = parseFloat(input1.value);
    var input2value = parseFloat(input1.value);
    console.log(calc(input1value, input2value));
});
function calc(a, b) {
    var select = document.getElementById("select").value;
    var calced = a + select + b;
    return eval(calced);
}
