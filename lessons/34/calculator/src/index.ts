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
  return inputSalaryElValue * 12;
}

// setInterval(calcSalaryYear, 1000);
// console.log(calcSalaryYear());

function printResults(): void {
  //   let salaryYearElValue: string = salaryYearEl.innerHTML;
  salaryYearEl.innerHTML = calcSalaryYear() + "";
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
