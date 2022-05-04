let numInput = document.querySelectorAll('.num');
let opInput = document.querySelectorAll('.op'); 
let currentoutput = document.querySelector('.top');
let currentoutputbot = document.querySelector('.bot');
let clearbtn = document.querySelector('.ac');
let equalbtn = document.querySelector('.equal'); 
let currentNum1 = '';
let currentNum2 = '';
let operator = '';
let counter = false;
currentoutput.textContent = 0;
currentoutputbot.textContent = '';
equalbtn.addEventListener('click', () => {
    currentoutputbot.textContent = operation(operator);
})

clearbtn.addEventListener('click', (event) => {
    currentNum1 = '';
    currentNum2 = '';
    operator = '';
    counter = false;
    opInput.forEach((button) => {
        for(let i = 0; i < opInput.length; i++) {
            opInput[i].disabled = false;
        }
    });
    currentoutput.textContent = 0;
});

numInput.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (counter == false) {
            currentNum1 += event.target.id;
            currentoutput.textContent = currentNum1;
        }
        else {//if (counter == 2) {
            currentNum2 += event.target.id;
            currentoutput.textContent += event.target.id;
        }
        
    });
});

opInput.forEach((button) => {
    button.addEventListener('click', (event) => {
        operator = event.target.id;
        currentoutput.textContent += ' ' +operator+ ' ';
        for(let i = 0; i < opInput.length; i++) {
            opInput[i].disabled = true;
        }
        counter = true;
        console.log(operator);
    });
});

function operation(operater) {
    if (operater == '+') {
        console.log((currentNum1) + (currentNum2));
        return parseInt(currentNum1) + parseInt(currentNum2);
    }
    if (operater == '-') {
        return parseInt(currentNum1) - parseInt(currentNum2);
    }
    if (operater == '*') {
        return parseInt(currentNum1) * parseInt(currentNum2);
    }
    if (operater == '/') {
        return parseInt(currentNum1) / parseInt(currentNum2);
    }
}