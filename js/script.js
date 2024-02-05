
const buttonTexts = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "="];
const operatorTexts = ["+", "-", "×", "÷"];

const btn_container = document.getElementById("button-container");

const num_container = document.getElementById("number-container");
const operator_container = document.getElementById("operator-container");

const input_container = document.getElementById("input-container");
const textArea = document.getElementById("input");


buttonTexts.forEach((text) => {
    const button = document.createElement("button");
    button.id = `button_${text.replace(/\s+/g, '_')}`;
    button.classList.add("button");
    button.textContent = text;
    button.onclick = function() {
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
        handleButtonClick(text);
    }
    operator_container.appendChild(button);

})

function handleButtonClick(buttonText) {
    console.log(`Button clicked: ${buttonText}`);
}

btn_container.appendChild(num_container);
btn_container.appendChild(operator_container);