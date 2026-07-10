console.log("Hello World");

let workingNumber = undefined;
let olderNumber = undefined;

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

//This function allows for multiple buttons pressed to make larger numbers
//pressing the button 1 and then 2 will make the number 12
function updateNumber(num){
    if(workingNumber === undefined)
        workingNumber = num;
    else
        workingNumber = workingNumber * 10 + num;
}

function numberButtonPress(num){
    updateNumber(num);
    updateDisplay(workingNumber);
}

document.getElementById("one").addEventListener("click", () => numberButtonPress(1));
document.getElementById("two").addEventListener("click", () => numberButtonPress(2));
document.getElementById("three").addEventListener("click", () => numberButtonPress(3));
document.getElementById("four").addEventListener("click", () => numberButtonPress(4));
document.getElementById("five").addEventListener("click", () => numberButtonPress(5));
document.getElementById("six").addEventListener("click", () => numberButtonPress(6));
document.getElementById("seven").addEventListener("click", () => numberButtonPress(7));
document.getElementById("eight").addEventListener("click", () => numberButtonPress(8));
document.getElementById("nine").addEventListener("click", () => numberButtonPress(9));
document.getElementById("zero").addEventListener("click", () => numberButtonPress(0));