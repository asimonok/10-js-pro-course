const inputSalaryEl = document.querySelector(".input-salary");
const inputVacationEl = document.querySelector(".input-vacation");

const select = (document.getElementById("currency") as HTMLSelectElement).value;
// const inputSalaryElValue: number = parseFloat((inputSalaryEl as HTMLInputElement).value);
// const inputVacationElValue: number = parseFloat((inputVacationEl as HTMLInputElement).value);

const salaryYearEl = document.querySelector(".salary-in-year-value");
const salaryVacationEl = document.querySelector(".salary-in-vacation-value");
const salaryWeekEl = document.querySelector(".salary-in-week-value");
const salaryDayEl = document.querySelector(".salary-in-day-value");
const salaryHourEl = document.querySelector(".salary-in-hour-value");
const salaryMinuteEl = document.querySelector(".salary-in-minute-value");
const salaryRnEl = document.querySelector(".salary-rn-value");

function calcSalaryYear(): number {
  const inputSalaryElValue: number = parseFloat((inputSalaryEl as HTMLInputElement).value);
  return Math.round(inputSalaryElValue * 12);
}
function calcSalaryVacation(): number {
  const inputSalaryElValue: number = parseFloat((inputSalaryEl as HTMLInputElement).value);
  const inputVacationElValue: number = parseFloat((inputVacationEl as HTMLInputElement).value);
  return Math.round((inputSalaryElValue / 30) * inputVacationElValue);
}

function calcSalaryWeek(): number {
  const inputSalaryElValue: number = parseFloat((inputSalaryEl as HTMLInputElement).value);
  return Math.round((inputSalaryElValue / 30) * 7);
}

function calcSalaryDay(): number {
  const inputSalaryElValue: number = parseFloat((inputSalaryEl as HTMLInputElement).value);
  return Math.round(inputSalaryElValue / 30);
}

function calcSalaryHour(): number {
  const inputSalaryElValue: number = parseFloat((inputSalaryEl as HTMLInputElement).value);
  return Math.round(inputSalaryElValue / 720);
}

function calcSalaryMinute(): number {
  const inputSalaryElValue: number = parseFloat((inputSalaryEl as HTMLInputElement).value);
  return Math.round(inputSalaryElValue / 720 / 60);
}
// эту функцию каждую секунду
function calcSalaryRn(): number {
  const inputSalaryElValue: number = parseFloat((inputSalaryEl as HTMLInputElement).value);
  return inputSalaryElValue / 720 / 60 / 60;
}
// const select = (document.getElementById("currency") as HTMLOptionElement).value;
function printResults(): void {
  //   let salaryYearElValue: string = salaryYearEl.innerHTML;
  //   const select = (document.getElementById("currency") as HTMLOptionElement).value;
  salaryYearEl.innerHTML = calcSalaryYear() + " " + select;
  salaryVacationEl.innerHTML = calcSalaryVacation() + " " + select;
  salaryWeekEl.innerHTML = calcSalaryWeek() + " " + select;
  salaryDayEl.innerHTML = calcSalaryDay() + " " + select;
  salaryHourEl.innerHTML = calcSalaryHour() + " " + select;
  salaryMinuteEl.innerHTML = calcSalaryMinute() + " " + select;
}

// console.log(setInterval(calcSalaryYear, 1000));
// var myVar = setInterval(function () {
//   printResults();
// }, 1000);

const buttonEl = document.querySelector(".button");
buttonEl.addEventListener("click", () => {
  console.log(calcSalaryYear());
  printResults();
});
setInterval(function () {
  printResults();
  salaryRnEl.innerHTML = calcSalaryRn() + calcSalaryRn() + " " + select;
}, 1000);
