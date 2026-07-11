console.log("Hello World");

let firstNumStored = false;
let firstNumber = 0;
let secondNumber = 0;
let operand = null;
let justEvaluated = false;

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
    if(justEvaluated){
        firstNumber = num;
        justEvaluated = false;
    } else
        firstNumber = firstNumber * 10 + num;
}

function numberButtonPress(num){
    updateNumber(num);
    updateDisplay(firstNumber);
}

function operandButtonPress(operandPressed){
    if(firstNumStored)
        evaluate()

    operand = operandPressed;
    secondNumber = firstNumber;
    firstNumber = 0;
    firstNumStored = true;
    operand = operandPressed;
}

function evaluate(){
    //If an operator hasnt been selected then do nothing
    if(operand !== null){
        let value = operate(secondNumber, operand, firstNumber);

        if(Number.isFinite(value)){
            firstNumber = value;
            updateDisplay(firstNumber);
            secondNumber = 0;
            operand = null;
            firstNumStored = false;
            justEvaluated = true;
        }
        else
            updateDisplay(value);
    }
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

document.getElementById("add").addEventListener("click", () => operandButtonPress(add));
document.getElementById("minus").addEventListener("click", () => operandButtonPress(subtract));
document.getElementById("multiply").addEventListener("click", () => operandButtonPress(multiply));
document.getElementById("divide").addEventListener("click", () => operandButtonPress(divide));

document.getElementById("equal").addEventListener("click", () => evaluate());