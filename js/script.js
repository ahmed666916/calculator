
const buttonTexts = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", ".", "="];

const btn_container = document.getElementById("button-container");

buttonTexts.forEach((text, index) => {
    const button = document.createElement("button");
    button.id = `button${index + 1}`;
    button.classList.add("button");
    button.textContent = text;
    btn_container.appendChild(button);
})