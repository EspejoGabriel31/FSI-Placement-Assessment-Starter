// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Gabriel Espejo" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    //console.log('Gingerbread + button was clicked!')
    
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    gbCount.textContent = ++gb
    updateTotal()
})

// TODO: Hook up event listeners for the rest of the buttons
const gbCount = document.querySelector("#qty-gb")
const gbMinusBtn = document.querySelector('#minus-gb')

const ccCount = document.querySelector('#qty-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const ccPlusBtn = document.querySelector('#add-cc')

const sugarCount = document.querySelector('#qty-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
const sugarPlusBtn = document.querySelector('#add-sugar')

gbMinusBtn.addEventListener('click',function(){
    if(gbCount.textContent > 0){
        gbCount.textContent = --gb
        updateTotal()
    }
    
})

ccMinusBtn.addEventListener('click',function(){
    if(ccCount.textContent > 0){
        ccCount.textContent = --cc
        updateTotal()
    }

})

ccPlusBtn.addEventListener('click',function(){
    ccCount.textContent = ++cc 
    updateTotal()
})

sugarMinusBtn.addEventListener('click',function(){
    if(sugarCount.textContent > 0){
        sugarCount.textContent = --sugar
        updateTotal()
    }
})

sugarPlusBtn.addEventListener('click',function(){
    sugarCount.textContent = ++sugar
    updateTotal()
})

const totalCount = document.querySelector('#qty-total')
let total = totalCount.textContent

function updateTotal(){
    total = gb + cc + sugar
    totalCount.textContent = total
}