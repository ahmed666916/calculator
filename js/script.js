
const buttonTexts = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "="];
const operatorTexts = ["+", "-", "×", "÷"];

const btn_container = document.getElementById("button-container");

const num_container = document.getElementById("number-container");
const operator_container = document.getElementById("operator-container");

const input_container = document.getElementById("input-container");
const input = document.getElementById("input");


buttonTexts.forEach((text) => {
    const button = document.createElement("button");
    button.id = `button_${text.replace(/\s+/g, '_')}`;
    button.classList.add("button");
    button.textContent = text;
    button.onclick = function() {
        if (button.textContent === "=") {
            handleButtonClick(" "+ text + " ");
            return;
        }
        handleButtonClick(text);
    }
    num_container.appendChild(button);
})


operatorTexts.forEach((text) => {
    const button = document.createElement("button");
    button.id = `button_${text.replace(/\s+/g, '_')}`;
    button.classList.add("operator");
    button.textContent = text;
    button.onclick = function() {
        handleButtonClick(" "+ text + " ");
    }
    operator_container.appendChild(button);

})

function handleButtonClick(buttonText) {
    
    input.value += `${buttonText}`;
    
}


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}




input_container.appendChild(input);

btn_container.appendChild(num_container);
btn_container.appendChild(operator_container);