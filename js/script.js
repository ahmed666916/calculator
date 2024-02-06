
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
            //handleButtonClick(" "+ text + " ");
            operate();
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


function getInputText() {
    let inputValue = input.value;
    //console.log(inputValue);
    //console.log(typeof(inputValue));
    let numArray = inputValue.split(" ");
    let num1 = parseFloat(numArray[0]);
    let num2 = parseFloat(numArray[2]);
    let operator = numArray[1];

    //console.log(num1);
    //console.log(num2);
    //console.log(operator);
    let inputArray = [];
    inputArray.push(num1);
    inputArray.push(num2);
    inputArray.push(operator);
    

    return inputArray;



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

function operate(a, b) {
    let inputArray = getInputText();
    let num1 = inputArray[0];
    let num2 = inputArray[1];
    let operator = inputArray[2];
    if (operator === "+") {
        let sum = add(num1, num2);
        return displayResult(sum) ;
        
    }else if(operator === "-") {
        let difference = subtract(num1, num2);

        return displayResult(difference);
    }else if(operator === "×") {
        let product = multiply(num1, num2);
        return displayResult(product);
    }else if(operator === "÷") {
        let division = divide(num1, num2);
        return displayResult(division);
    }else {
        alert("Error!");
    }

}

function displayResult(result) {
    input.value = result;
}




input_container.appendChild(input);

btn_container.appendChild(num_container);
btn_container.appendChild(operator_container);