function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("alex");


function sayHello(userName, userGender) {
    alert(`Hello, ${userGender === 'male' ? 'mr.': 'mrs.'} ${userName}`);
}

sayHello('Bob', 'male');
sayHello('Anna', 'woman');


function sum(a, b) {
    a + b 
}
