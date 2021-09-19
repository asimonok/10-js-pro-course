// input values
const inputSalary = document.getElementById(
  'input__salary'
) as HTMLInputElement;
const inputVacation = document.getElementById(
  'input__vacation'
) as HTMLInputElement;
const allInputEls = document.querySelectorAll('.input');

//select values
const selectCurrency = document.getElementById(
  'select__currency'
) as HTMLSelectElement;
const selectDays = document.getElementById('select__days') as HTMLSelectElement;
const selectHours = document.getElementById(
  'select__hours'
) as HTMLSelectElement;
const allSelectEls = document.querySelectorAll('.select');

//output values
const currencyValues: NodeListOf<Element> =
  document.querySelectorAll('.currency-value');
const salaryPerYearValue = document.getElementById('salary__year');
const salaryPerVacationValue = document.getElementById('salary__vacation');
const salaryPerWeekValue = document.getElementById('salary__week');
const salaryPerDayValue = document.getElementById('salary__day');
const salaryPerHourValue = document.getElementById('salary__hour');
const salaryPerMinutValue = document.getElementById('salary__minut');
const salaryPerSecondValue = document.getElementById('salary__second');

//console.log(currencyValues);

// choose currency

enum Currencies {
  BYN = 'BYN',
  RUB = '₽',
  USD = '$',
  EUR = '€',
}

const updateCurrency = () => {
  const currency: string = selectCurrency.value;
  for (let item of currencyValues as any) {
    item.textContent = currency;
  }
};

selectCurrency.addEventListener('change', updateCurrency);

//calculate salary
const calcSalary = () => {
  let result: number = 0;
  if (salaryPerYearValue) {
    result = (parseFloat(inputSalary.value) || 50000) * 12;
    salaryPerYearValue.textContent = result.toString();
  }
  if (salaryPerWeekValue) {
    result = Math.round((parseFloat(inputSalary.value) || 50000) / 4);
    salaryPerWeekValue.textContent = result.toString();
  }
  if (salaryPerDayValue) {
    result = Math.round(
      (parseFloat(inputSalary.value) || 50000) /
        4 /
        parseFloat(selectDays.value)
    );
    salaryPerDayValue.textContent = result.toString();
  }
  if (salaryPerHourValue) {
    result = Math.round(
      (parseFloat(inputSalary.value) || 50000) /
        4 /
        parseFloat(selectDays.value) /
        parseFloat(selectHours.value)
    );
    salaryPerHourValue.textContent = result.toString();
  }
  if (salaryPerMinutValue) {
    result = Math.round(
      (parseFloat(inputSalary.value) || 50000) /
        4 /
        parseFloat(selectDays.value) /
        parseFloat(selectHours.value) /
        60
    );
    salaryPerMinutValue.textContent = result.toString();
  }
  if (salaryPerSecondValue) {
    result = Math.round(
      (parseFloat(inputSalary.value) || 50000) /
        4 /
        parseFloat(selectDays.value) /
        parseFloat(selectHours.value) /
        60 /
        60
    );
    salaryPerSecondValue.textContent = result.toString();
  }
  if (salaryPerVacationValue) {
    result =
      ((parseFloat(inputSalary.value) || 50000) /
        4 /
        parseFloat(selectDays.value)) *
      (parseFloat(inputVacation.value) || 28);
    salaryPerVacationValue.textContent = result.toString();
  }
};

for (let element of allInputEls as any) {
  element.addEventListener('change', calcSalary);
}

for (let element of allSelectEls as any) {
  element.addEventListener('change', calcSalary);
}

// show fields after page reload
document.addEventListener('DOMContentLoaded', calcSalary);

// update salary per second
