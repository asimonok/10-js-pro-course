let currencyEl = document.querySelector('#currency');
let currentCarrencyEls = document.querySelectorAll('.current-carrency');
let monthSalaryEl = document.querySelector('#month');
let vacationDurationEl = document.querySelector('#vacation');
let workingDayEl = document.querySelector('#working-week');
let workinTimeEl = document.querySelector('#working-time');

//output elements
let outputSpans = document.querySelectorAll('.result-item span.out');
let yearSalaryEl = document.querySelector('#in-year');
let vacationSalaryEl = document.querySelector('#in-vacation');
let weekSalaryEl = document.querySelector('#in-week');
let daySalaryEl = document.querySelector('#in-day');
let hourSalaryEl = document.querySelector('#in-hour');
let minuteSalaryEl = document.querySelector('#in-minute');
let secondSalaryEl = document.querySelector('#in-second');


const carrency = {
  'rubl': 1,
  'euro': 3.1,
  'dollar': 2.5,
  'pound': 3.8,
};

/* const countingData = {
  'monthSalaryEl': monthSalaryEl.value,
  'vacationDurationEl': vacationDurationEl.value,
  'workingDayEl': workingDayEl.value,
  'workinTimeEl': workinTimeEl.value,
} */

//update text of currency
const updateCurrencyText = () => {
  let currentCurancyText = currencyEl.options[currencyEl.selectedIndex].text;
  currentCarrencyEls.forEach(el => el.textContent = currentCurancyText);
}
currencyEl.addEventListener('change', updateCurrencyText);


const countSalary = ( time ) => {
  let inDay = +monthSalaryEl.value / (workingDayEl.value * 4);
  let inHour = inDay / workinTimeEl.value;
 
  if (time === 'in-year') {
   return +monthSalaryEl.value * 12;
  }
  if (time === 'in-vacation') {
    return Math.round(inDay * +vacationDurationEl.value);
  }
  if (time === 'in-week') {
    return Math.round(+monthSalaryEl.value / 4);
  }
  if (time === 'in-day') {
    return  Math.round(inDay);
  }
  if (time === 'in-hour') {
    return Math.round(inHour *100) / 100;
  }
  if (time === 'in-minute') {
    return Math.round((inHour / 60) * 1000) / 1000;
  }
  if (time === 'in-second') {
    return Math.round((inHour / 3600) * 1000) / 1000;
  }
}

//rende all fields
const rendeDate = () => {
  outputSpans.forEach(item => item.textContent = countSalary(item.id))
}

// count immediately after render DOM
document.addEventListener('DOMContentLoaded', rendeDate);


//update data in case of any input changed
//get all inputs than can be changed;
let counts = document.querySelectorAll('[data-count]');
counts.forEach(item => item.addEventListener('change', rendeDate));


//update data for seconds every second
let inSecond = countSalary('in-second');
let seconds = countSalary('in-second');
monthSalaryEl.addEventListener('change', () => {
  inSecond = countSalary('in-second')
});
  
setInterval( () => {
  seconds += inSecond;
  // console.log(seconds.toFixed(3));
  // console.log('inSecond: ', inSecond);
  secondSalaryEl.textContent = seconds.toFixed(3);
}, 1000);

