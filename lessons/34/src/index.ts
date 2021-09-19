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
const currencyEls: NodeListOf<Element> =
  document.querySelectorAll('.currency-element');
const salaryPerYear = document.getElementById('salary__year');
const salaryPerVacation = document.getElementById('salary__vacation');
const salaryPerWeek = document.getElementById('salary__week');
const salaryPerDay = document.getElementById('salary__day');
const salaryPerHour = document.getElementById('salary__hour');
const salaryPerMinut = document.getElementById('salary__minut');
const salaryNow = document.getElementById('salary__second');

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
  for (let item of currencyEls as any) {
    item.textContent = currency;
  }
};

selectCurrency.addEventListener('change', updateCurrency);

//calculate salary
const calcSalary = () => {
  let result: number = 0;
  if (salaryPerYear) {
    result = parseFloat(inputSalary.value) * 12;
    salaryPerYear.textContent = result.toString();
  }
  if (salaryPerWeek) {
    result = parseFloat(inputSalary.value) / 4;
    salaryPerWeek.textContent = result.toFixed(2);
  }
  if (salaryPerDay) {
    result = parseFloat(inputSalary.value) / 4 / parseFloat(selectDays.value);
    salaryPerDay.textContent = result.toFixed(2);
  }
  if (salaryPerHour) {
    result =
      parseFloat(inputSalary.value) /
      4 /
      parseFloat(selectDays.value) /
      parseFloat(selectHours.value);
    salaryPerHour.textContent = result.toFixed(2);
  }
  if (salaryPerMinut) {
    result =
      parseFloat(inputSalary.value) /
      4 /
      parseFloat(selectDays.value) /
      parseFloat(selectHours.value) /
      60;
    salaryPerMinut.textContent = result.toFixed(2);
  }
  if (salaryNow) {
    let resultPerSecond: number = 0;
    let sumSalaryPerSecond: number = 0;
    //update per second
    setInterval(() => {
      resultPerSecond = parseFloat(inputSalary.value) / 30 / 24 / 60 / 60;
      sumSalaryPerSecond += resultPerSecond;
      salaryNow.textContent = sumSalaryPerSecond.toFixed(2);
    }, 1000);
  }
  if (salaryPerVacation) {
    result =
      (parseFloat(inputSalary.value) / 4 / parseFloat(selectDays.value)) *
      parseFloat(inputVacation.value);
    salaryPerVacation.textContent = result.toString();
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
