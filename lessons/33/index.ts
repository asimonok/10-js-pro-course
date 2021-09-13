
const input1 = document.querySelector('.first');
const input2 = document.querySelector('.second');
const select = document.querySelector('#operators');
const btnEl = document.querySelector('.calc');




btnEl.addEventListener('click', (options) => {
    console.log('ok');
    debugger;
    let vel1 = input1.value;
    let vel2 = input2.value;
    let operator = select.value;

    switch(operator) {
        case 'minus':
            console.log(vel1 - vel2);
            break;
        case 'plus':
            console.log(vel1 + vel2);
            break;    
        case 'devide':
            console.log(vel1 / vel2);
            break;    
        case 'multiply':
            console.log(vel1 * vel2);
            break;    
    }
})



