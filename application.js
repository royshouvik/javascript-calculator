var currentDisplay = "";
var currentResult = 0;
var display = document.querySelector(".display");
var op = "";

var a = 0,
    b = 0;
var firstInput = true;

var updateDisplay = function (number) {

    currentDisplay = currentDisplay + String(number);
    if (typeof (number) === "number") {
        a = a * 10 + number;

    }
    display.textContent = currentDisplay;
    // console.log(currentDisplay);


}



var updateNumber = function (number) {

    //updateResult(number);
    updateDisplay(number);


}

var addition = document.querySelector(".row:nth-child(4) div:nth-child(4)");
addition.onclick = function () {
    display.textContent = "+";
    currentDisplay = "";
    b = a;
    a = 0;
    op = "add";


}

var division = document.querySelector(".row div:nth-child(4)");
division.onclick = function () {
    display.textContent = "/";
    currentDisplay = "";
    b = a;
    a = 0;
    op = "div";


}

var product = document.querySelector(".row:nth-child(2) div:nth-child(4)");
product.onclick = function () {
    display.textContent = "X";
    currentDisplay = "";
    b = a;
    a = 0;
    op = "mul";


}
var subtract = document.querySelector(".row:nth-child(3) div:nth-child(4)");
subtract.onclick = function () {
    display.textContent = "-";
    currentDisplay = "";
    b = a;
    a = 0;
    op = "sub";


}


var equal = document.querySelector(".row:nth-child(4) div:nth-child(3)");
equal.onclick = function () {
    if (op === "add") {

        display.textContent = a + b;
    } else if (op === "div") {

        display.textContent = parseFloat(b) / a;
    } else if (op === "mul") {

        display.textContent = parseFloat(b) * a;
    } else if (op === "sub") {

        display.textContent = parseFloat(b) - a;
    }

    currentDisplay = "";
    a = 0;
    b = 0;


}

var zero = document.querySelector(".row:nth-child(4) div:nth-child(2)");
zero.onclick = function () {
    updateNumber(0);
};


var seven = document.querySelector(".row div");
seven.onclick = function () {
    updateNumber(7);
};


var eight = document.querySelector(".row div:nth-child(2)");
eight.onclick = function () {
    updateNumber(8);
};


var nine = document.querySelector(".row div:nth-child(3)");
nine.onclick = function () {
    updateNumber(9);
};

var four = document.querySelector(".row:nth-child(2) div");
four.onclick = function () {
    updateNumber(4);
};


var five = document.querySelector(".row:nth-child(2) div:nth-child(2)");
five.onclick = function () {
    updateNumber(5);
};


var six = document.querySelector(".row:nth-child(2) div:nth-child(3)");
six.onclick = function () {
    updateNumber(6);
};



var one = document.querySelector(".row:nth-child(3) div");
one.onclick = function () {
    updateNumber(1);
};


var two = document.querySelector(".row:nth-child(3) div:nth-child(2)");
two.onclick = function () {
    updateNumber(2);
};


var three = document.querySelector(".row:nth-child(3) div:nth-child(3)");
three.onclick = function () {
    updateNumber(3);
};
