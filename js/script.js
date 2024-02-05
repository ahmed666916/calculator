
const buttonTexts = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "="];
const operatorTexts = ["+", "-", "×", "÷"];

const btn_container = document.getElementById("button-container");

const num_container = document.getElementById("number-container");
const operator_container = document.getElementById("operator-container");

buttonTexts.forEach((text, index) => {
    const button = document.createElement("button");
    button.id = `button${index + 1}`;
    button.classList.add("button");
    button.textContent = text;
    num_container.appendChild(button);
})


btn_container.appendChild(num_container);
btn_container.appendChild(operator_container);