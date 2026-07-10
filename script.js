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