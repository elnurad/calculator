let operatorIsExpected = false;

let numberIsExpected = true;

let result = ''

const equals = document.querySelector('.equal')

const display = document.querySelector('.display');
console.log(display.innerHTML)
let displayValue = display.innerHTML

const buttons = Array.from(document.getElementsByClassName('calculator'))

const numberButtons = Array.from(document.getElementsByClassName('num-button'));

const decimal = document.querySelector('.decimal')



const calculation =(a, operator, b)=>{
    switch(operator){
        case '+': return a + b;
        case '-': return a-b;
        case '*': return a * b;
        case '/': return a / b;
    }

}





//clear
const clear = document.querySelector('.clear')

const clearDisplay=()=>{
    clear.addEventListener('click', ()=> {
        display.innerHTML = '0'
        displayValue = '0'
        numberIsExpected = true;
        console.log(numberIsExpected)})
    
    
}




const numbersOnScreen = ()=>{
    numberButtons.forEach(button=>{
        button.addEventListener('click', (e)=>{
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


const operatorButtons = Array.from(document.getElementsByClassName('operator'));
const operatorsOnScreen = () =>{
    operatorButtons.forEach(button=>{
        button.addEventListener('click', ()=>{
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



const updateDisplay =()=>{
    equals.addEventListener('click', ()=>{
        if(displayValue.endsWith('=')){
            displayValue = displayValue
        }else{
            display.innerHTML += equals.innerHTML;
            displayValue = display.innerHTML
        }
        
        
    
    // const arr = displayValue.split(/\-|\/|\*|\+|\=/g)

    
    // const arr = displayValue.split(/(?=\-)|(?=\/)|(?=\*)|(?=\+)|(?=\=)/g)
   
    const arr = displayValue.split(/(?=\-)|(?<=\-)|(?=\/)|(?<=\/)|(?<=\*)|(?=\*)|(?=\+)|(?<=\+)|(?=\=)|(?=\=)/g)

    

        console.log(arr)
        if(arr.length > 3){
        while(arr[3]!=='='){
                    let result = calculation(Number(arr[0]), arr[1], Number(arr[2]))
                    arr.splice(0,3)
                    arr.unshift(result)
                    display.innerHTML = String(result)
                    // operatorIsExpected = false
                    numberIsExpected = false
                    console.log(result)
                    console.log(numberIsExpected)

                } 
                if(arr[3]==='='){
                    let result = calculation(Number(arr[0]), arr[1], Number(arr[2]))
                    display.innerHTML = String(result)
                    // operatorIsExpected = false
                    numberIsExpected = false
                    console.log(result)
                }
            }else{
                display.innerHTML = '0'
                displayValue = '0'
            }


            })}


decimal.addEventListener('click', (e) => {
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