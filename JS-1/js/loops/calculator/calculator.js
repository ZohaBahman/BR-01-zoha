let num1 = parseFloat(prompt('enter first number'));
let num2 = parseFloat(prompt('enter second number'));

if (isNaN(num1) || isNaN(num2)) {
    console.log('invalid input. enter numbers');
}

let operation = prompt('enter an operation: +, -, *, /');

while (operation !== "+"
    && operation !== "-"
    && operation !== "*"
    && operation !== "/") {
    operation = prompt('invalid operation');
}

let result;

if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    if (num2 === 0) {
        console.log("division by 0 is not allowed!");
    } else {
        result = num1 / num2;
    }
}

if (result !== undefined) {
    alert("the result is: " + result);
}