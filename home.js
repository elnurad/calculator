//functions for basic operations
const add =(a, b) => a + b;

const subtract = (a, b)=>a - b;

const multiply=(a, b)=> a * b;

const divide = (a, b) => a / b;

const operate = (operator, a, b) => operator(a, b)

// Create the functions that 
// populate the display when you click the number buttons… you should 
// be storing the ‘display value’ in a variable somewhere for use in the next 
// step.
const buttons = Array.from(document.getElementsByClassName('calculator'));
console.log(typeof buttons)
const button_values = buttons.map(button=>button.innerHTML)
console.log(button_values) //["0", "clear", "delete", "1", etc]




