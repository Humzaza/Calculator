let numInput = document.querySelectorAll('.num');
let opInput = document.querySelectorAll('.op'); 
let currentoutput = document.querySelector('.top');
let currentoutputbot = document.querySelector('.bot');
let clearbtn = document.querySelector('.ac');
let equalbtn = document.querySelector('.equal'); 
let percentbtn = document.querySelector('.per');
let positneg = document.querySelector('.minplus')
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
    currentoutputbot.textContent = '';
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
        if (currentNum1 == '') {
            currentNum1 = '0';
        }
        operator = event.target.id;
        currentoutput.textContent += ' ' +operator+ ' ';
        for(let i = 0; i < opInput.length; i++) {
            opInput[i].disabled = true;
        }
        counter = true;
    });
});

percentbtn.addEventListener('click', (e) => {
    if (currentNum1 == '') {
        currentNum1 = 0;
    }
    currentoutput.textContent = currentNum1;
    currentoutputbot.textContent = operation('%');
});
positneg.addEventListener('click', (e) => {
    if (currentNum1 == '') {
        currentNum1 = 0;
    }
    currentoutput.textContent = currentNum1;
    currentoutputbot.textContent = operation('+/-');
});

equalbtn.addEventListener('click', (event) => {
    currentNum1 = 
    currentNum2 = '';
    operator = '';
    counter = true;
    opInput.forEach((button) => {
        for(let i = 0; i < opInput.length; i++) {
            opInput[i].disabled = false;
        }
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
    if (operater == '%') {
        return parseInt(currentNum1) / 100;
    }
    if (operater == '+/-') {
        return parseInt(currentNum1) * -1;
    }

}