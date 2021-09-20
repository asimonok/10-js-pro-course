var inputSalaryEl = document.querySelector(".input-salary");
var inputVacationEl = document.querySelector(".input-vacation");
var selectEl = document.getElementById("currency");
var inputSalaryElValue = parseFloat(inputSalaryEl.value);
var workDaysEl = document.getElementById("work-days");
var workHours = document.getElementById("work-hours");
for (var i = 1; i <= 7; i++) {
    var newOption = new Option(i + "");
    workDaysEl.append(newOption);
}
for (var i = 1; i <= 24; i++) {
    var newOption = new Option(i + "");
    workHours.append(newOption);
}
var salaryYearEl = document.querySelector(".salary-in-year-value");
var salaryVacationEl = document.querySelector(".salary-in-vacation-value");
var salaryWeekEl = document.querySelector(".salary-in-week-value");
var salaryDayEl = document.querySelector(".salary-in-day-value");
var salaryHourEl = document.querySelector(".salary-in-hour-value");
var salaryMinuteEl = document.querySelector(".salary-in-minute-value");
var salaryRnEl = document.querySelector(".salary-rn-value");
function calcSalaryYear() {
    var inputSalaryElValue = parseFloat(inputSalaryEl.value);
    return Math.round(inputSalaryElValue * 12);
}
function calcSalaryVacation() {
    var inputSalaryElValue = parseFloat(inputSalaryEl.value);
    var inputVacationElValue = parseFloat(inputVacationEl.value);
    if (inputVacationElValue) {
        return Math.round((inputSalaryElValue / 30) * inputVacationElValue);
    }
    else {
        return 0;
    }
}
function calcSalaryWeek() {
    var inputSalaryElValue = parseFloat(inputSalaryEl.value);
    return Math.round((inputSalaryElValue / 30) * parseFloat(workDaysEl.value));
}
function calcSalaryDay() {
    var inputSalaryElValue = parseFloat(inputSalaryEl.value);
    return Math.round((inputSalaryElValue / 30 / 24) * parseFloat(workHours.value));
}
function calcSalaryHour() {
    var inputSalaryElValue = parseFloat(inputSalaryEl.value);
    return Math.round(inputSalaryElValue / 720);
}
function calcSalaryMinute() {
    var inputSalaryElValue = parseFloat(inputSalaryEl.value);
    return (inputSalaryElValue / 720 / 60).toFixed(2);
}
function calcSalaryRn() {
    var inputSalaryElValue = parseFloat(inputSalaryEl.value);
    return inputSalaryElValue / 720 / 60 / 60;
}
function printResults() {
    var select = selectEl.value;
    var inputSalaryElValue = parseFloat(inputSalaryEl.value);
    if (inputSalaryElValue) {
        salaryYearEl.innerHTML = calcSalaryYear() + " " + select;
        salaryVacationEl.innerHTML = calcSalaryVacation() + " " + select;
        salaryWeekEl.innerHTML = calcSalaryWeek() + " " + select;
        salaryDayEl.innerHTML = calcSalaryDay() + " " + select;
        salaryHourEl.innerHTML = calcSalaryHour() + " " + select;
        salaryMinuteEl.innerHTML = calcSalaryMinute() + " " + select;
    }
    else {
        salaryYearEl.innerHTML = " 0 " + select;
        salaryVacationEl.innerHTML = " 0 " + select;
        salaryWeekEl.innerHTML = " 0 " + select;
        salaryDayEl.innerHTML = " 0 " + select;
        salaryHourEl.innerHTML = " 0 " + select;
        salaryMinuteEl.innerHTML = " 0 " + select;
    }
}
var rn = 1;
setInterval(function () {
    printResults();
    var inputSalaryElValue = parseFloat(inputSalaryEl.value);
    var select = selectEl.value;
    if (inputSalaryElValue) {
        salaryRnEl.innerHTML = (calcSalaryRn() * rn).toFixed(6) + " " + select;
        rn++;
    }
    else {
        salaryRnEl.innerHTML = " 0 " + select;
    }
}, 1000);
