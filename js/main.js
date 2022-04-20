// type out first number 

// then the opertor

// then type out the second number

// then final equals

// keypad selectors
let displayValue = '0'
let equalsTo = 0

// make they keys work
document.querySelector(".clear").addEventListener('click', () => {
    displayValue = '0'
    equalsTo = 0
    document.querySelector('.mainDisplay').innerHTML = displayValue
    document.querySelector('.totalDisplay').innerHTML = equalsTo
})

document.querySelector(".back").addEventListener('click', () => {
    (displayValue.length === 1) ? displayValue = '0' : displayValue = displayValue.slice(0,-1)
    document.querySelector('.mainDisplay').innerHTML = displayValue
})

document.querySelector(".one").addEventListener('click', () => {    (displayValue ==='0') ?
displayValue = '1': displayValue += '1'
document.querySelector('.mainDisplay').innerHTML = displayValue
})
document.querySelector(".two").addEventListener('click', () => {    (displayValue ==='0') ?
displayValue = '2': displayValue += '2'
document.querySelector('.mainDisplay').innerHTML = displayValue
})
document.querySelector(".three").addEventListener('click', () => {    (displayValue ==='0') ?
displayValue = '3': displayValue += '3'
document.querySelector('.mainDisplay').innerHTML = displayValue
})
document.querySelector(".four").addEventListener('click', () => {    (displayValue ==='0') ?
displayValue = '4': displayValue += '4'
document.querySelector('.mainDisplay').innerHTML = displayValue
})
document.querySelector(".five").addEventListener('click', () => {    (displayValue ==='0') ?
displayValue = '5': displayValue += '5'
document.querySelector('.mainDisplay').innerHTML = displayValue
})
document.querySelector(".six").addEventListener('click', () => {    (displayValue ==='0') ?
displayValue = '6': displayValue += '6'
document.querySelector('.mainDisplay').innerHTML = displayValue
})
document.querySelector(".seven").addEventListener('click', () => {    (displayValue ==='0') ?
displayValue = '7': displayValue += '7'
document.querySelector('.mainDisplay').innerHTML = displayValue
})
document.querySelector(".eight").addEventListener('click', () => {    (displayValue ==='0') ?
displayValue = '8': displayValue += '8'
document.querySelector('.mainDisplay').innerHTML = displayValue
})
document.querySelector(".nine").addEventListener('click', () => {    (displayValue ==='0') ?
displayValue = '9': displayValue += '9'
document.querySelector('.mainDisplay').innerHTML = displayValue
})

document.querySelector(".zero").addEventListener('click', () => {    (displayValue ==='0') ?
displayValue = '0': displayValue += '0'
document.querySelector('.mainDisplay').innerHTML = displayValue
})

document.querySelector(".deci").addEventListener('click', () => {    (displayValue ==='0') ?
displayValue = '.': displayValue += '.'
document.querySelector('.mainDisplay').innerHTML = displayValue
})

//now the operators 

document.querySelector(".divi").addEventListener('click', () => {    (displayValue ==='0') ?
displayValue = '/': displayValue += '/'
document.querySelector('.mainDisplay').innerHTML = displayValue
})
document.querySelector(".multi").addEventListener('click', () => {    (displayValue ==='0') ?
displayValue = '*': displayValue += '*'
document.querySelector('.mainDisplay').innerHTML = displayValue
})
document.querySelector(".add").addEventListener('click', () => {    (displayValue ==='0') ?
displayValue = '+': displayValue += '+'
document.querySelector('.mainDisplay').innerHTML = displayValue
})
document.querySelector(".sub").addEventListener('click', () => {    (displayValue ==='0') ?
displayValue = '-': displayValue += '-'
document.querySelector('.mainDisplay').innerHTML = displayValue
})
document.querySelector(".bracketLeft").addEventListener('click', () => {    (displayValue ==='0') ?
displayValue = '(': displayValue += '('
document.querySelector('.mainDisplay').innerHTML = displayValue
})
document.querySelector(".bracketRight").addEventListener('click', () => {    (displayValue ==='0') ?
displayValue = ')': displayValue += ')'
document.querySelector('.mainDisplay').innerHTML = displayValue
})

// now to make the equals do magical things

document.querySelector(".equals").addEventListener('click', () => {    (displayValue ==='0') ?
displayValue = 'no values': equalsTo = eval(displayValue)
document.querySelector('.totalDisplay').innerHTML = equalsTo
})

