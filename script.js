/*Attributes*/
const buttonInput = document.querySelectorAll("button");
let num1 = "";
let num2 = "";
let operator = "";

//Whenever a button is pressed, calls display() with button's value
buttonInput.forEach(button => {
    button.addEventListener("click", function() {  
        const buttonValue = this.textContent;  
        //console.log('Clicked button value:', buttonValue);
        display(buttonValue);
    });
});

//Updates answerBox display and stores values for num1, num2, and operator.
//Also used to compute sqrt & square
function display(val) {
    const display = document.querySelector(".answerBox");
    if (val == "=") {
        let ans = answer(num1, num2, operator);
        num1 = ans;
        num2 = "";
        operator = "";
        display.textContent = ans;
    } else if (val == "+" || val == "-" || val == "*" || val == "/") {
        if (num1 == "" || operator != "") {
            throw new Error;
        }
        operator = val;
        display.textContent += val;
    } else if (val == "clear") {
        display.textContent = "";
        num1 = "";
        num2 = "";
        operator = "";
    } else if (val == "+/-") {
        if (operator != "") {
            if (num2 == "") {
                throw new Error;
            }
            num2 *= -1;
            display.textContent = num1 + operator + num2;
        }  else {
            num1 *= -1;
            display.textContent = num1;
        }
    } else if (val == "x²") {
        if (operator != "") {
            if (num2 == "") {
                throw new Error;
            }
            num2 *= num2;
            display.textContent = num1 + operator + num2;
        }  else {
            num1 *= num1;
            display.textContent = num1;
        }
    } else if (val == ".") {
        if (operator != "") {
            if (num2 == "" || num2.includes(".")) {
                throw new Error;
            }
            num2 += val;
            display.textContent = num1 + operator + num2;
        }  else {
            if (num1.includes(".")) {
                throw new Error;
            }
            num1 += val;
            display.textContent = num1;
        }
    } else if (val == "√x"){
        if (operator != "") {
            if (num2 == "") {
                throw new Error;
            }
            num2 = Math.sqrt(num2);
            display.textContent = num1 + operator + num2;
        }  else {
            num1 = Math.sqrt(num1);
            display.textContent = num1;
        }
    } else if (display) {
        if (operator != "") {
            num2 += val;
            //console.log(num2);
        }  else {
            num1 += val;
            //console.log(num1);
        }
        display.textContent += val;
    }
}

//Performs operations +, -, *, & / on num1 & num2 then returns value
function answer(operand1, operand2, op) {
    let x = parseFloat(operand1);
    let y = parseFloat(operand2);
    if (op == "+") {
        let ans = x + y;
        return ans;
    } else if (op == "-") {
        let ans = x - y;
        return ans;
    } else if (op == "*") {
        let ans = x * y;
        return ans;
    } else if (op == "/") {
        let ans = x / y;
        return ans;
    }
}


//Slider:
const slider = document.getElementById("myRange");

//Updates Slider Scale
slider.oninput = function() {
    let sliderVal = slider.value;
    document.body.style.transform = `scale(${sliderVal})`;
}
                 