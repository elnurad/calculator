let operatorIsExpected = false;//use this to prevent operators on display if it is preceded by another operator

let numberIsExpected = true;//use this to make sure that operator is followed by a number

let result = '' //to store results of calculations

const equals = document.querySelector('.equal')

const display = document.querySelector('.display');
console.log(display.innerHTML)
let displayValue = display.innerHTML

const buttons = Array.from(document.getElementsByClassName('calculator'))

const numberButtons = Array.from(document.getElementsByClassName('num-button'));

const decimal = document.querySelector('.decimal')

//function to be used for calculations in the main function
function calculation(a, operator, b){
    switch(operator){
        case '+': return a + b;
        case '-': return a-b;
        case '*': return a * b;
        case '/': if(b === 0){
            alert("Division by zero not allowed")
            return 0
        } 
        else{
            return a / b

        }
    }

}




//function to clear display
const clear = document.querySelector('.clear')

const clearDisplay=()=>{
    clear.addEventListener('click', function(){
        display.innerHTML = '0'
        displayValue = '0'
        numberIsExpected = true;
        console.log(numberIsExpected)})
    
    
}



//function to display numbers on display
function numbersOnScreen(){
    numberButtons.forEach(button=>{
        button.addEventListener('click', function(e){
            if (numberIsExpected){
                if(display.innerText === '0' && e.target.dataset.value === 0){
                
                    display.innerHTML = button.innerHTML;
                    displayValue = display.innerHTML;
                    operatorIsExpected = true;
                }
                if(display.innerText === '0'){
                    display.innerHTML = button.innerHTML;
                    displayValue = display.innerHTML;
                    operatorIsExpected = true;
                }
                else{
                    display.innerText += button.innerHTML
                    displayValue = display.innerHTML;
                    operatorIsExpected = true;
                    console.log(displayValue)
 
                }


            }
            else{
                display.innerHTML = button.innerHTML;
                displayValue = display.innerHTML;
                numberIsExpected = true
            console.log(displayValue)
 
            }
        
        })
      
    })}


//function to display operators on display screen
const operatorButtons = Array.from(document.getElementsByClassName('operator'));
function operatorsOnScreen(){
    operatorButtons.forEach(button=>{
        button.addEventListener('click', function(){
            if (operatorIsExpected){
                display.innerHTML += button.innerHTML;
                displayValue = display.innerHTML
                operatorIsExpected = false;
                numberIsExpected = true;

            }
            displayValue = displayValue
            console.log(displayValue)
            numberIsExpected = true;
 
        }
    )
    })
}


//function where the calculations happen and it is displayed on the screen
function updateDisplay(){
    equals.addEventListener('click', ()=>{
        if(displayValue.endsWith('=')){
            displayValue = displayValue
        }else{
            display.innerHTML += equals.innerHTML;
            displayValue = display.innerHTML
        }
        //break the string down into an array at operators
        let arr = displayValue.match(/\d+|[.*/=+-]/g)

        console.log(arr)
        //to create a new array (e.g ['8','.', '5', + '3', '.', '2'] ==> ['8.2', '+', '3.2'])
        let i = 0
        while(i<arr.length){
            if(arr[i]==='.'){
                let decimalNum = `${arr[i-1]}${arr[i]}${arr[i+1]}`
                console.log(decimalNum)
                arr.splice(i-1,3,decimalNum)
                
                
                

            }
            i++
            
        }
        
        //to allow calculations if the number on display is negative
        if(arr[0]==='-'){
            let newIndexZero = arr[0]+arr[1]
            arr.splice(0,2,newIndexZero)
            console.log(arr)
        }
        //calculations
        if(arr.length > 3){
        while(arr[3]!=='='){
                    let result = calculation(Number(arr[0]), arr[1], Number(arr[2]))
                    arr.splice(0,3)
                    arr.unshift(result)
                    display.innerHTML = String(result)
                    numberIsExpected = false
                    console.log(result)
                    console.log(numberIsExpected)

                } 
                if(arr[3]==='='){
                    let result = calculation(Number(arr[0]), arr[1], Number(arr[2]))
                    display.innerHTML = String(result)
                    numberIsExpected = false
                    console.log(result)
                }
            }else{
                display.innerHTML = '0'
                displayValue = '0'
            }


            })}


//for decimal symbol
decimal.addEventListener('click', function(e){
    if(display.innerHTML.lastIndexOf('+') >= display.innerHTML.lastIndexOf('.') ||
     display.innerHTML.lastIndexOf('-') >= display.innerHTML.lastIndexOf('.') || 
     display.innerHTML.lastIndexOf('*') >= display.innerHTML.lastIndexOf('.') || 
     display.innerHTML.lastIndexOf('/') >= display.innerHTML.lastIndexOf('.')){
    display.innerHTML += "."
    operatorIsExpected = false;
    
              
    }
               
    })
              
    

numbersOnScreen()      
    
operatorsOnScreen()

updateDisplay()
clearDisplay()