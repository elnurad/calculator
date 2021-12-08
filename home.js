
const calculation =(a, operator, b)=>{
    switch(operator){
        case '+': return a + b;
        case '-': return a-b;
        case '*': return a * b;
        case '/': return a / b;
    }

}


//display
const display = document.querySelector('.display');
console.log(display.innerHTML)

const clear = document.querySelector('.clear')
const clearDisplay=()=>{
    clear.addEventListener('click', ()=> {
        display.innerHTML = ''
        displayValue = ''
        console.log('clear')})
    
    
}
// const numberButtons = Array.from(document.getElementsByClassName('num_button'));
const buttons = Array.from(document.getElementsByClassName('calculator'))

let displayValue = ''


let result = ''




let operatorIsExpected = false;

const numberButtons = Array.from(document.getElementsByClassName('num-button'));


const numbersOnScreen = ()=>{
    numberButtons.forEach(button=>{
        button.addEventListener('click', function(){
            display.innerHTML += button.innerHTML;
            displayValue = display.innerHTML;
            operatorIsExpected = true;

          
            
        })
    })
}
numbersOnScreen()



const operatorButtons = Array.from(document.getElementsByClassName('operator'));
const operatorsOnScreen = () =>{
    operatorButtons.forEach(button=>{
        button.addEventListener('click', (e)=>{
            if (operatorIsExpected){
                display.innerHTML += button.innerHTML;
                displayValue = display.innerHTML
                operatorIsExpected = false;

            }
            displayValue = displayValue
            console.log(displayValue)
 
        }
    )
    })
}
operatorsOnScreen()

const equals = document.querySelector('.equal')

const updateDisplay =()=>{
    equals.addEventListener('click', ()=>{
        if(displayValue.endsWith('=')){
            displayValue = displayValue
        }else{
            display.innerHTML += equals.innerHTML;
            displayValue = display.innerHTML
        }
        
        

        const arr = displayValue.split(/\b/g)
        console.log(arr)
        if(arr.length > 3){
        while(arr[3]!=='='){
                    let result = calculation(parseInt(arr[0]), arr[1], parseInt(arr[2]))
                    arr.splice(0,3)
                    arr.unshift(result)
                    display.innerHTML = String(result)
                    operatorIsExpected = false
                    console.log(result)

                } 
                if(arr[3]==='='){
                    let result = calculation(parseInt(arr[0]), arr[1], parseInt(arr[2]))
                    display.innerHTML = String(result)
                    operatorIsExpected = false
                    console.log(result)
                }
            }else{
                display.innerHTML = ''
                displayValue = ''
            }


            })}



    


            
    


updateDisplay()






clearDisplay()