document.addEventListener("DOMContentLoaded", () => {
  const selectCurrencyEl = document.getElementById(
    "currency"
  ) as HTMLSelectElement;
  const currencyEl = document.querySelectorAll(".currency-name");
  const inputSalaryEl = document.querySelector(".salary") as HTMLInputElement;
  const inputVacationEl = document.querySelector(
    ".vacation"
  ) as HTMLInputElement;
  const selectWorkDayEl = document.getElementById(
    "workday"
  ) as HTMLSelectElement;
  const selectWorkHourEl = document.getElementById(
    "workhour"
  ) as HTMLSelectElement;
  const salaryYearEl = document.getElementById("in-year");
  const salaryVacationEl = document.getElementById("in-vacation");
  const salaryWeekEl = document.getElementById("in-week");
  const salaryDayEl = document.getElementById("in-day");
  const salaryHourEl = document.getElementById("in-hour");
  const salaryMinuteEl = document.getElementById("in-minute");
  const salaryCurrentEl = document.getElementById("in-now");

  let seconds: number = 0;

  const setCurrencyName = (): void => {
    const selectedCurrency =
      selectCurrencyEl.options[selectCurrencyEl.selectedIndex];
    currencyEl.forEach((el) => (el.textContent = selectedCurrency.text));

    seconds = 0;
  };
  selectCurrencyEl.addEventListener("change", setCurrencyName);
  setCurrencyName();

  const calculateYearSalary = (salary: number): number => {
    return Math.round(salary * 12);
  };

  const calculateVacationSalary = (
    salary: number,
    vacationDays: number
  ): number => {
    return Math.round((salary / 29.7) * vacationDays);
  };

  const calculateWeekSalary = (salary: number): number => {
    return Math.round(salary / 4);
  };

  const calculateDaySalary = (salary: number, workDays: number): number => {
    return Math.round(salary / (4 * workDays));
  };

  const calculateHourSalary = (
    salary: number,
    workDays: number,
    workHours: number
  ): number => {
    return Math.round(salary / (4 * workDays * workHours));
  };

  const calculateMinuteSalary = (
    salary: number,
    workDays: number,
    workHours: number
  ): number => {
    return salary / (4 * workDays * workHours * 60);
  };

  const calculateCurrentSalary = (
    salary: number,
    workDays: number,
    workHours: number
  ): number => {
    return salary / (4 * workDays * workHours * 60 * 60);
  };

  function formatValue(value: number, digits: number = 0): string {
    if (isNaN(value)) {
      return "";
    }
    return value.toFixed(digits);
  }

  function recalculate(): void {
    const inputSalaryElValue: number = parseFloat(inputSalaryEl.value);
    const inputVacationElValue: number = parseFloat(inputVacationEl.value);
    const selectWorkDaysElValue: number = parseFloat(selectWorkDayEl.value);
    const selectWorkHoursElValue: number = parseFloat(selectWorkHourEl.value);

    salaryYearEl.textContent = formatValue(
      calculateYearSalary(inputSalaryElValue)
    );
    salaryVacationEl.textContent = formatValue(
      calculateVacationSalary(inputSalaryElValue, inputVacationElValue)
    );
    salaryWeekEl.textContent = formatValue(
      calculateWeekSalary(inputSalaryElValue)
    );
    salaryDayEl.textContent = formatValue(
      calculateDaySalary(inputSalaryElValue, selectWorkDaysElValue)
    );
    salaryHourEl.textContent = formatValue(
      calculateHourSalary(
        inputSalaryElValue,
        selectWorkDaysElValue,
        selectWorkHoursElValue
      )
    );
    salaryMinuteEl.textContent = formatValue(
      calculateMinuteSalary(
        inputSalaryElValue,
        selectWorkDaysElValue,
        selectWorkHoursElValue
      ),
      2
    );

    seconds = 0;
  }

  setInterval(function () {
    const inputSalaryElValue: number = parseFloat(inputSalaryEl.value);
    const selectWorkDaysElValue: number = parseFloat(selectWorkDayEl.value);
    const selectWorkHoursElValue: number = parseFloat(selectWorkHourEl.value);

    salaryCurrentEl.textContent = formatValue(
      calculateCurrentSalary(
        inputSalaryElValue,
        selectWorkDaysElValue,
        selectWorkHoursElValue
      ) * seconds,
      2
    );

    seconds++;
  }, 1000);

  inputSalaryEl.addEventListener("input", recalculate);
  inputVacationEl.addEventListener("input", recalculate);
  selectWorkDayEl.addEventListener("change", recalculate);
  selectWorkHourEl.addEventListener("change", recalculate);

  recalculate();
});
