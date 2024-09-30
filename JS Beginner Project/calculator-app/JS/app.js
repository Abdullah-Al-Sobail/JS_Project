document.addEventListener("DOMContentLoaded", () => {
    //select DOM element
   const display = document.querySelector("#display");
   const buttons = document.querySelectorAll(".btn");//select all button

   //for handle user input
   let currentInput = "";
   let operator = "";
   let operand1 = null;

   //add click event listener to each button
   buttons.forEach(button => {
    button.addEventListener("click", () => {
        //collect the value of clicked button
        const value = button.dataset.value;

        //clear button logic
        if(value === "clear"){
            currentInput = "";
            operator = "";
            operand1 = null;
            display.textContent = "0";
        }//equals button logic
        else if(value === "="){ 
            if(operand1 !== null && operator){
                const operand2 = currentInput === "" ? 0 : parseFloat(currentInput);
                currentInput = calculate(operand1, operand2, operator);
                display.textContent = currentInput;
                operand1 = null;
                operator = "";
            }
        } // Operator buttons (+, -, *, /)
        else if(["+", "-", "*", "/"].includes(value)){
            if(currentInput !== ""){
                operand1 = parseFloat(currentInput);
                operator = value;
                currentInput = "";
            }
        }// Number and decimal buttons
        else{
            currentInput += value;
            display.textContent = currentInput;
        }
    });
   });
});

 // Helper function to perform arithmetic operations
 function calculate(a, b, operator){
    switch(operator){
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            return b !==0 ? a/b : "Error";//To Prevent division by zero
        default:
            return 0;
    }
 }