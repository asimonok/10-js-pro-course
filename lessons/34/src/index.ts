const salaryEl = document.querySelector(".input-salary") as HTMLInputElement;
const vacationEl = document.querySelector(".input-vacation") as HTMLInputElement;

const selectCurr = document.getElementById("currency") as HTMLSelectElement;

const workDaysEl = document.getElementById("workweek") as HTMLSelectElement;
const workTimeEl = document.getElementById("work-time") as HTMLSelectElement;

const salaryYearEl = document.querySelector("#year-salary");
const salaryVacationEl = document.querySelector("#vacation-salary");
const salaryWeekEl = document.querySelector("#week-salary");
const salaryDayEl = document.querySelector("#day-salary");
const salaryHourEl = document.querySelector("#hour-salary");
const salaryMinuteEl = document.querySelector("#minute-salary");
const salaryRnEl = document.querySelector("#rn-salary");

enum Period {
  year,
  vacation,
  week,
  day,
  hour,
  minute
}

const sum = (period: Period): number | void => {
  let dailySalary: number = Number(salaryEl.value) / (Number(workDaysEl.value) * 4);
  let hourlySalary: number = dailySalary / Number(workTimeEl.value);

  if(period === Period.year) { 
      return Number(salaryEl.value) * 12; 
  }
  if(period === Period.vacation){ 
      return Math.round( dailySalary * Number(vacationEl.value) ); 
  }
  if(period === Period.week) { 
      return Math.round( Number(salaryEl.value) / 4 ); 
  }
  if(period === Period.day) { 
      return Number( ( dailySalary ).toFixed(0)); 
  }
  if(period === Period.hour) { 
      return Number(( hourlySalary ).toFixed(2)); 
  }
  if(period === Period.minute) { 
      return Number(( hourlySalary / 60).toFixed(2)); 
  }
}

const printResult = (): void => {
  let currency = selectCurr.value;
  if (salaryEl.value) {
    salaryYearEl.innerHTML = sum(Period.year) + " " + currency;
    salaryVacationEl.innerHTML = sum(Period.vacation) + " " + currency;
    salaryWeekEl.innerHTML = sum(Period.week) + " " + currency;
    salaryDayEl.innerHTML = sum(Period.day) + " " + currency;
    salaryHourEl.innerHTML = sum(Period.hour) + " " + currency;
    salaryMinuteEl.innerHTML = sum(Period.minute) + " " + currency;
  } else {
    salaryYearEl.innerHTML = " 0 " + currency;
    salaryVacationEl.innerHTML = " 0 " + currency;
    salaryWeekEl.innerHTML = " 0 " + currency;
    salaryDayEl.innerHTML = " 0 " + currency;
    salaryHourEl.innerHTML = " 0 " + currency;
    salaryMinuteEl.innerHTML = " 0 " + currency;
  }
}

const salaryRn = () => {
  let resultSalaryRn: number = 0;
  let sumSalaryRn: number = 0;
  let salaryRn = salaryEl.value;
  setInterval(() => {
    let currency = selectCurr.value;
    if (salaryRn == salaryEl.value) {
      resultSalaryRn = parseFloat(salaryEl.value) / 30 / 24 / 60 / 60;
      sumSalaryRn += resultSalaryRn;
      salaryRnEl.innerHTML = sumSalaryRn.toFixed(3) + " " + currency;
    }
    else {
      sumSalaryRn = 0;
      salaryRn = salaryEl.value;
    }
  }, 1000);
};

document.addEventListener('DOMContentLoaded', printResult);
document.addEventListener('DOMContentLoaded', salaryRn);
document.addEventListener('input', printResult);
