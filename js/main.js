// type out first number 

// then the opertor

// then type out the second number

// then final equals


// keypad selectors
// Object Oriented Programming... adjust your code ray.

const calculator = {
 displayValue :'0',
    equalsTo : 0
}


console.log("message for the user:")
console.log("the top is your 'display window' and below it is your 'total window'. you can create as long of a string of numbers and operators as you would like, this calculator will do the math for you in a snap! it will follow PEMDAS order of operations but don't use operators back to back... you will only recieved an error (if you are watching the console that is). use the '<x' button to clear your 'main display' and get you back on track! The 'C' button clears everything from memory. with great power comes great responsiblity so use your powers wisely. ")
console.log("-signed your friendly neighbourhood programmer :)")
// make they keys work
document.querySelector(".clear").addEventListener('click', () => {
    calculator.displayValue = '0'
    calculator.equalsTo = 0
    document.querySelector('.mainDisplay').innerHTML = calculator.displayValue
    document.querySelector('.totalDisplay').innerHTML = calculator.equalsTo
})

document.querySelector(".back").addEventListener('click', () => {
    (calculator.displayValue.length === 1) ? calculator.displayValue = '0' : calculator.displayValue = calculator.displayValue.slice(0,-1)
    document.querySelector('.mainDisplay').innerHTML = calculator.displayValue
    console.log("message for user:")
    console.log("this will backspace delete the value of your 'display window'.")
    console.log("-signed your friendly neighbourhood programmer :)")
})

document.querySelector(".one").addEventListener('click', () => {    (calculator.displayValue ==='0') ?
calculator.displayValue = '1': calculator.displayValue += '1'
document.querySelector('.mainDisplay').innerHTML = calculator.displayValue
})
document.querySelector(".two").addEventListener('click', () => {    (calculator.displayValue ==='0') ?
calculator.displayValue = '2': calculator.displayValue += '2'
document.querySelector('.mainDisplay').innerHTML = calculator.displayValue
})
document.querySelector(".three").addEventListener('click', () => {    (calculator.displayValue ==='0') ?
calculator.displayValue = '3': calculator.displayValue += '3'
document.querySelector('.mainDisplay').innerHTML = calculator.displayValue
})
document.querySelector(".four").addEventListener('click', () => {    (calculator.displayValue ==='0') ?
calculator.displayValue = '4': calculator.displayValue += '4'
document.querySelector('.mainDisplay').innerHTML = calculator.displayValue
})
document.querySelector(".five").addEventListener('click', () => {    (calculator.displayValue ==='0') ?
calculator.displayValue = '5': calculator.displayValue += '5'
document.querySelector('.mainDisplay').innerHTML = calculator.displayValue
})
document.querySelector(".six").addEventListener('click', () => {    (calculator.displayValue ==='0') ?
calculator.displayValue = '6': calculator.displayValue += '6'
document.querySelector('.mainDisplay').innerHTML = calculator.displayValue
console.log("message for user:")
console.log(" this is an easter egg for those of you who are paying attention. I love the number six <3")
console.log("-signed your friendly neighbourhood programmer :)") 

})
document.querySelector(".seven").addEventListener('click', () => {    (calculator.displayValue ==='0') ?
calculator.displayValue = '7': calculator.displayValue += '7'
document.querySelector('.mainDisplay').innerHTML = calculator.displayValue
})
document.querySelector(".eight").addEventListener('click', () => {    (calculator.displayValue ==='0') ?
calculator.displayValue = '8': calculator.displayValue += '8'
document.querySelector('.mainDisplay').innerHTML = calculator.displayValue
})
document.querySelector(".nine").addEventListener('click', () => {    (calculator.displayValue ==='0') ?
calculator.displayValue = '9': calculator.displayValue += '9'
document.querySelector('.mainDisplay').innerHTML = calculator.displayValue
})

document.querySelector(".zero").addEventListener('click', () => {    (calculator.displayValue ==='0') ?
calculator.displayValue = '0': calculator.displayValue += '0'
document.querySelector('.mainDisplay').innerHTML = calculator.displayValue
})

document.querySelector(".deci").addEventListener('click', () =>{  

 repeatedOperator('.')
  
    
document.querySelector('.mainDisplay').innerHTML = calculator.displayValue
})

//now the operators 

document.querySelector(".divi").addEventListener('click', () => {    
    mainDisplayZero('/')
    repeatedOperator('/')
document.querySelector('.mainDisplay').innerHTML = calculator.displayValue
})

document.querySelector(".multi").addEventListener('click', () => {    (calculator.displayValue ==='0') ?
calculator.displayValue = '0': calculator.displayValue += '*'
    mainDisplayZero('*') 
    repeatedOperator('*')
document.querySelector('.mainDisplay').innerHTML = calculator.displayValue
})

document.querySelector(".add").addEventListener('click', () => {
    mainDisplayZero('+')  
    repeatedOperator('+')
document.querySelector('.mainDisplay').innerHTML = calculator.displayValue
})

document.querySelector(".sub").addEventListener('click', () => {    
    mainDisplayZero('-')    
    repeatedOperator('-')
document.querySelector('.mainDisplay').innerHTML = calculator.displayValue
})

document.querySelector(".bracketLeft").addEventListener('click', () => {    (calculator.displayValue ==='0') ?
calculator.displayValue = '(': calculator.displayValue += '('

    repeatedOperator("(")
document.querySelector('.mainDisplay').innerHTML = calculator.displayValue
})

document.querySelector(".bracketRight").addEventListener('click', () => {    mainDisplayZero(')')
    repeatedOperator(")")
document.querySelector('.mainDisplay').innerHTML = calculator.displayValue
})

// now to make the equals do magical things

document.querySelector(".equals").addEventListener('click', () => {   
    if (calculator.equalsTo == eval(calculator.displayValue))
        {   calculator.displayValue = calculator.equalsTo
            document.querySelector('.mainDisplay').innerHTML = calculator.displayValue
        } else {
            calculator.equalsTo = eval(calculator.displayValue)
            document.querySelector('.totalDisplay').innerHTML = calculator.equalsTo
            console.log("message for user:")
            console.log(" if you click equal button twice, the total display window will be copied up into the main display window of further calculation fun.")
            console.log("-signed your friendly neighbourhood programmer :)") 
        }
   
    

})


function mainDisplayZero(str) {
    (calculator.displayValue ==='0') ?
    calculator.displayValue = '0': calculator.displayValue += str
    }
   
    

function repeatedOperator(oper) {
    let dispEndVal = calculator.displayValue[calculator.displayValue.length -2]

    if (dispEndVal === oper)
     { return calculator.displayValue = calculator.displayValue.slice(0,-1)
    } else { return 
    }

    } 

    // there is an issue of repeat decimals and repeat operators. I will like to solve this problem but might just shift to a simpler system that doesnt have these string issues.
    