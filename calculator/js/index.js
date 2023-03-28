calculator = {
    addition: function (a, b) {
        return a + b;
    },
    subtraction: function (a, b) {
        return a - b;
    },
    multipy: function (a, b) {
        return a * b;
    },
    division: function (a, b) {
        return a / b;
    },
    remainder: function (a, b) {
        return a % b;
    }
}
console.log("Calculator");
a = prompt("enter a");
b = prompt("enter b");
a = +a;
b = +b;
console.log("1.Addition");
console.log("2.Subtraction");
console.log("3.Multiplication");
console.log("4.Division");
console.log("5.Remainder");
let number = prompt("Enter a nuumber to perform the operation ");
number = +number;
let result;

switch (number) {
    case 1:
        result = calculator.addition(a, b);
        console.log("RESULT:Addition" + " " + result.toFixed(2));
        break;
    case 2:
        result = calculator.subtraction(a, b);
        console.log("RESULT:Subtraction" + " " + result.toFixed(2));
        break;
    case 3:
        result = calculator.multipy(a, b);
        console.log("RESULT:Multiplication" + " " + result.toFixed(2));
        break;
    case 4:
        result = calculator.division(a, b);
        console.log("RESULT:Division:" + " " + result.toFixed(2));
        break;
    case 5:
        result = calculator.remainder(a, b);
        console.log("RESULT:Remainder" + " " + result.toFixed(2));
        break;
    default:
        console.log("ALERT::Enter number between 1 to 5");
        break;
}
