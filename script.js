let numInput = document.querySelectorAll('.num');
let opInput = document.querySelectorAll('.op'); 
let currentoutput = document.querySelector('.top');
let currentoutputbot = document.querySelector('.bot');
let clearbtn = document.querySelector('.ac');
let equalbtn = document.querySelector('.equal'); 
let percentbtn = document.querySelector('.per');
let positneg = document.querySelector('.minplus');
let decimal = document.querySelector('.dec');
let currentNum1 = '';
let currentNum2 = '';
let operator = '';
let counter = false;
let answer = 0;
let equaltrue = false;
let posneg = false;
currentoutput.textContent = 0;
currentoutputbot.textContent = '';

decimal.addEventListener('click', (event) => {
    if(counter == false) {
        currentNum1 += '.';
        currentoutput.textContent += '.';
    }
    else {
        currentNum2 += '.';
        currentoutput.textContent += '.';
    }
    decimal.disabled = true;
});

equalbtn.addEventListener('click', () => {
    answer = operation(operator);
    currentoutputbot.textContent = operation(operator);
})

clearbtn.addEventListener('click', (event) => {
    posneg = false;
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
    decimal.disabled = false;
});

numInput.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (equaltrue == true) {
            currentNum1 = '';
            currentNum2 = '';
            operator = '';
            counter = false;
            decimal.disabled = false;
            currentoutput.textContent = '';
            equaltrue = false;
        }
        if (counter == false) {
            currentNum1 += event.target.id;
            currentoutput.textContent = currentNum1;
        }
        else {//if (counter == 2) {
            // if (posneg == true) {
            //     currentoutput.textContent += '';
            // }
            // else {
                currentoutput.textContent += event.target.id;
            // }
            currentNum2 += event.target.id;
        }
        
    });
});

opInput.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (currentNum1 == '') {
            currentNum1 = '0';
        }
        currentoutput.textContent = currentNum1;
        operator = event.target.id;
        currentoutput.textContent += ' ' +operator+ ' ';
        for(let i = 0; i < opInput.length; i++) {
            opInput[i].disabled = true;
        }
        equaltrue = false;
        counter = true;    
        decimal.disabled = false;
    });
});

percentbtn.addEventListener('click', (e) => {
    // if (currentNum1 == '') {
    //     currentNum1 = '0';
    // }
    currentoutput.textContent = currentNum1;
    currentoutputbot.textContent = operation('%');
});
positneg.addEventListener('click', (e) => {
    posneg = true;
    if (currentNum1 == '') {
        currentNum1 = 0;
    }
    if (currentNum2 == '') {
        currentNum2 = 0;
    }
    if (counter == false) {
        currentNum1 = operation('+/-');
        currentoutput.textContent = currentNum1;
    }
    else {
        let tempout = currentoutput.textContent.substring(0, currentoutput.textContent.length - 1);
        tempout.slice(0, -2);
        console.log(tempout);
        currentoutput.textContent = tempout;
        currentNum2 = operation('+/-');
        currentoutput.textContent += currentNum2;
    } 
    //console.log(currentNum1);
    currentoutputbot.textContent = operation('+/-');
});

equalbtn.addEventListener('click', (event) => {
    currentNum1 = answer;
    currentNum2 = '';
    operator = '';
    counter = true;
    equaltrue = true;
    opInput.forEach((button) => {
        for(let i = 0; i < opInput.length; i++) {
            opInput[i].disabled = false;
        }
    });
}); 


function operation(operater) {
    console.log(operater);
    if (operater == '+') {
        return Number(currentNum1) + Number(currentNum2);
    }
    if (operater == '-') {
        return Number(currentNum1) - Number(currentNum2);
    }
    if (operater == '*') {
        return Number(currentNum1) * Number(currentNum2);
    }
    if (operater == '/') {
        if(currentNum2 == 0) {
            return 'BRUH';
        }
        return Number(currentNum1) / Number(currentNum2);
    }
    if (operater == '%') {
        return Number(currentNum1) / 100;
    }
    if (operater == '+/-') {
        if(counter == false) {
            return Number(currentNum1) * -1;
        }
        else {
            return Number(currentNum2) * -1;
        }
    }

}