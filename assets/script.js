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

// selecting the element with an id of qty-gb
const gbCount = document.querySelector("#qty-gb")

// selecting the element with an id of minus-gb
const gbMinusBtn = document.querySelector('#minus-gb')

// Event listener for clicks on the "-" button for Gingerbread cookies
gbMinusBtn.addEventListener('click',function(){
    if(gbCount.textContent > 0){
        gbCount.textContent = --gb
        updateTotal()
    }
    
})

// selecting the element with an id of qty-cc
const ccCount = document.querySelector('#qty-cc')

// selecting the element with an id of minus-cc
const ccMinusBtn = document.querySelector('#minus-cc')

// selecting the element with an id of add-cc
const ccPlusBtn = document.querySelector('#add-cc')

// Event listener for clicks on the "-" button for Chocolatechip cookies
ccMinusBtn.addEventListener('click',function(){
    if(ccCount.textContent > 0){
        ccCount.textContent = --cc
        updateTotal()
    }

})

// Event listener for clicks on the "+" button for Chocolatechip cookies
ccPlusBtn.addEventListener('click',function(){
    ccCount.textContent = ++cc 
    updateTotal()
})

// selecting the element with an id of qty-sugar
const sugarCount = document.querySelector('#qty-sugar')

// selecting the element with an id of minus-sugar
const sugarMinusBtn = document.querySelector('#minus-sugar')

// selecting the element with an id of add-sugar
const sugarPlusBtn = document.querySelector('#add-sugar')

// Event listener for clicks on the "-" button for Sugar cookies
sugarMinusBtn.addEventListener('click',function(){
    if(sugarCount.textContent > 0){
        sugarCount.textContent = --sugar
        updateTotal()
    }
})

// Event listener for clicks on the "+" button for Sugar cookies
sugarPlusBtn.addEventListener('click',function(){
    sugarCount.textContent = ++sugar
    updateTotal()
})

// selecting the element with an id of qty-total
const totalCount = document.querySelector('#qty-total')

let total = 0 // Total

// Method that updates Total 
function updateTotal(){
    total = gb + cc + sugar
    totalCount.textContent = total
}
