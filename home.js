//functions for basic operations
// const add =(a, b) => a + b;

// const subtract = (a, b)=>a - b;

// const multiply=(a, b)=> a * b;

// const divide = (a, b) => a / b;

// const operate = (a, operator, b) => operator(a, b)
// operate(1, add 2) => 1+2

// let result = eval(`${arr[0]}${arr[1]}${arr[2]}`)

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
// const numberButtons = Array.from(document.getElementsByClassName('num_button'));
const buttons = Array.from(document.getElementsByClassName('calculator'))

let currentDisplayValue = ''


let result = ''

const updateDisplay =()=>{
    buttons.forEach(button=>{
        button.addEventListener('click', function(){
            display.innerHTML += button.innerHTML;
            currentDisplayValue = display.innerHTML;


            if (button.innerHTML === '='){
                const arr = currentDisplayValue.split(/\b/g)
                while(arr[3]!=='='){
                    let result = calculation(parseInt(arr[0]), arr[1], parseInt(arr[2]))
                    arr.splice(0,3)
                    arr.unshift(result)
                    display.innerHTML = String(result)
                   
                    console.log(result)

                } 
                if(arr[3]==='='){
                    let result = calculation(parseInt(arr[0]), arr[1], parseInt(arr[2]))
                    display.innerHTML = String(result)
                    console.log(result)
                    

                    

                    

                }
           
           



          

            }
           
            
            
    
    
        })
    
    })
    };













// const updateDisplay =()=>{
//     buttons.forEach(button=>{
//         button.addEventListener('click', function(){
//             display.innerHTML += button.innerHTML;
//             currentDisplayValue = display.innerHTML;


//             if (button.innerHTML === '='){
//                 const arr = currentDisplayValue.split(/\b/g)
//                 while(arr[3]!=='='){
//                     let result = eval(`${arr[0]}${arr[1]}${arr[2]}`)
//                     arr.splice(0,3)
//                     arr.unshift(result)
//                     console.log(result)

//                 } if(arr[3]==='='){
//                     let result = eval(`${arr[0]}${arr[1]}${arr[2]}`)
//                     console.log(result)

//                 }
                

//             }
//             console.log(currentDisplayValue)
            
            
    
    
//         })
    
//     })
//     };










// const updateDisplay =()=>{
//     buttons.forEach(button=>{
//         button.addEventListener('click', function(){
//             display.innerHTML += button.innerHTML;
//             currentDisplayValue = display.innerHTML;
//             if (button.innerHTML === '='){
//                 const display_arr = currentDisplayValue.split(/\b/g)
//                 if(display_arr[3] === '='){
//                     let result =eval(`${display_arr[0]}${display_arr[1]}${display_arr[2]}`)
//                     console.log(result)
//                 }
//                 else{
//                     let result = eval(`${display_arr[0]}${display_arr[1]}${display_arr[2]}`)
//                     display_arr.splice(0,3)
//                     display_arr.unshift(result)
//                     let final_result = eval(`${display_arr[0]}${display_arr[1]}${display_arr[2]}`)
//                     console.log(final_result)

//                 }
                

//             }
//             console.log(currentDisplayValue)
            
            
    
    
//         })
    
//     })
//     };






// const updateDisplay =()=>{
// numberButtons.forEach(numButton=>{
//     numButton.addEventListener('click', function(){
//         display.innerHTML += numButton.innerHTML;
//         currentDisplayValue = display.innerHTML;
//         console.log(currentDisplayValue)
        


//     })

// })
// };
updateDisplay()

//operators
// const operators = Array.from(document.getElementsByClassName('operator'))
// console.log(operators[0].innerHTML)



//Action on Operators
// const operatorAction =()=>{
//     operators.forEach(operator=>{
//         operator.addEventListener('click', ()=>{ 
//              display.innerHTML = operator.innerHTML
//         })
//     })
// }


//clear
const clear = document.querySelector('.clear')
const clearDisplay=()=>{
    clear.addEventListener('click', ()=> {
        display.innerHTML = ''
        console.log('clear')})
    
    
}
    

// operatorAction()
clearDisplay()