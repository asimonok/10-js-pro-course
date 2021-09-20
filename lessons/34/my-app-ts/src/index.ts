const currencySelectEl = document.querySelector(
  ".currency-select"
) as HTMLSelectElement;
const currencyResultEl = document.querySelectorAll(".currency-result");

const salaryInputEl = document.querySelector(
  '[name="salary-input"]'
) as HTMLInputElement;
const vacationInputEl = document.querySelector(
  '[name="vacation-input"]'
) as HTMLInputElement;
const workweekSelectDaysEl = document.querySelector(
  ".workweek-select_days"
) as HTMLSelectElement;
const workweekSelectHoursEl = document.querySelector(
  ".workweek-select_hours"
) as HTMLSelectElement;

const currencyResulYearEl = document.querySelector(".salary-result_year");
const currencyResultVacationEl = document.querySelector(
  ".salary-result_vacation"
);
const currencyResultWeekEl = document.querySelector(".salary-result_week");
const currencyResultDayEl = document.querySelector(".salary-result_day");
const currencyResultHourEl = document.querySelector(".salary-result_hour");
const currencyResultMinuteEl = document.querySelector(".salary-result_minute");
const currencyResultNowEl = document.querySelector(".salary-result_now");

const addCurrentOption = (): void => {
  let selectedOption = currencySelectEl.options[currencySelectEl.selectedIndex];
  currencyResultEl.forEach((el) => (el.textContent = selectedOption.text));
};
addCurrentOption();

const changeOption = (): void => {
  let selectedOption = currencySelectEl.options[currencySelectEl.selectedIndex];
  currencyResultEl.forEach((el) => (el.textContent = selectedOption.text));
};

currencySelectEl.addEventListener("change", changeOption);

const calculate = (): void => {
  let salaryInputValue: number = parseFloat(salaryInputEl.value);
  let vacationInputValue: number = parseFloat(vacationInputEl.value);
  let selectDaysValue: number = parseFloat(workweekSelectDaysEl.value);
  let selectHoursValue: number = parseFloat(workweekSelectHoursEl.value);
  let result: number = 0;
  let resultNow: number = 0;

  if (currencyResulYearEl) {
    result = salaryInputValue * 12;
    currencyResulYearEl.textContent = result.toString();
  }
  if (currencyResultVacationEl) {
    result = (salaryInputValue / 29.7) * vacationInputValue;
    currencyResultVacationEl.textContent = result.toFixed(0);
  }
  if (currencyResultWeekEl) {
    result = salaryInputValue / 4;
    currencyResultWeekEl.textContent = result.toFixed(0);
  }
  if (currencyResultDayEl) {
    result = salaryInputValue / 4 / selectDaysValue;
    currencyResultDayEl.textContent = result.toFixed(0);
  }
  if (currencyResultHourEl) {
    result = salaryInputValue / 4 / selectDaysValue / selectHoursValue;
    currencyResultHourEl.textContent = result.toFixed(0);
  }
  if (currencyResultMinuteEl) {
    result = salaryInputValue / 4 / selectDaysValue / selectHoursValue / 60;
    currencyResultMinuteEl.textContent = result.toFixed(2);
  }
  if (currencyResultNowEl) {
    setInterval(() => {
      result = salaryInputValue / 30 / 24 / 60 / 60;
      resultNow += result;
      currencyResultNowEl.textContent = resultNow.toFixed(2);
    }, 1000);
  }
};

document.addEventListener("DOMContentLoaded", calculate);
salaryInputEl.addEventListener("input", calculate);
vacationInputEl.addEventListener("input", calculate);
workweekSelectDaysEl.addEventListener("change", calculate);
workweekSelectHoursEl.addEventListener("change", calculate);
