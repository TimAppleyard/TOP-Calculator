console.log("Hello World");

function add(num1, num2){
    return num1+num2;
}

function subtract(num1, num2){
    return num1-num2;
}

function multiply(num1, num2){
    return num1*num2;
}

function divide(num1, num2){
    if(num2 == 0){
        return "You can't divde by 0";
    } else {
        return +(num1/num2).toFixed(5);
    }
}

function operate(num1, operator, num2){
    return operator(num1, num2);
}

function updateDisplay(input){
    document.getElementById("display").textContent = input;
}

document.getElementById("one").addEventListener("click", () => updateDisplay(1));
document.getElementById("two").addEventListener("click", () => updateDisplay(2));
document.getElementById("three").addEventListener("click", () => updateDisplay(3));
document.getElementById("four").addEventListener("click", () => updateDisplay(4));
document.getElementById("five").addEventListener("click", () => updateDisplay(5));
document.getElementById("six").addEventListener("click", () => updateDisplay(6));
document.getElementById("seven").addEventListener("click", () => updateDisplay(7));
document.getElementById("eight").addEventListener("click", () => updateDisplay(8));
document.getElementById("nine").addEventListener("click", () => updateDisplay(9));
document.getElementById("zero").addEventListener("click", () => updateDisplay(0));