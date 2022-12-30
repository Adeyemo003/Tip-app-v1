const input = document.getElementById("input-1")

const inputPeople = document.getElementById("input-2")

const fiveBtn = document.querySelector("#five-btn")

const tenBtn = document.querySelector("#ten-btn")

const fftnBtn = document.querySelector("#fftn-btn")

const twntyFive = document.querySelector("#twentyfv-btn")

const fftyBtn = document.querySelector("#fifty-btn") 

const customIn = document.querySelector("#input-custom")

const tipPerson = document.getElementById("tip-person")

const totalPerson = document.getElementById("total-person")

const alertEl = document.querySelector("#alert")

const resetBtn = document.querySelector("#reset-btn")


function renderApp(par1) {
    let sumPerson = ""
    let cutHalf = input.value / inputPeople.value
    if (cutHalf === Infinity){
        console.log("Yes Infinity")
        return 0
    } else{
        console.log("Not Infinity")
    }
    sumPerson = (par1/100) * (cutHalf)
    cutHalf += sumPerson
    sumPerson = "$" + sumPerson.toFixed(2)
    tipPerson.textContent = sumPerson
    totalPerson.textContent = "$" + cutHalf.toFixed(2)
}

resetBtn.addEventListener("click", function() { 
    inputPeople.value = ""
    input.value = ""
    alertEl.textContent = ""
    customIn.value = ""
    tipPerson.textContent = "$0.00"
    totalPerson.textContent = "$0.00"

})

fiveBtn.addEventListener("click", function() { 
    renderApp(5)
    inputPeople.addEventListener('input', function() {
        if (inputPeople.value < 1) {
            alertEl.textContent = "Can't be zero"
        } else{
            alertEl.textContent = ""
            renderApp(5)
        }
    }
    ) 
})

tenBtn.addEventListener("click", function() { 
    renderApp(10)
    inputPeople.addEventListener('input', function() {
        if (inputPeople.value < 1) {
            alertEl.textContent = "Can't be zero"
        } else{
            alertEl.textContent = ""
            renderApp(10)
        }
    }
    ) 
})

fftnBtn.addEventListener("click", function() { 
    renderApp(15)
    inputPeople.addEventListener('input', function() {
        if (inputPeople.value < 1) {
            alertEl.textContent = "Can't be zero"
        } else{
            alertEl.textContent = ""
            renderApp(15)
        }
    }
    ) 
})

twntyFive.addEventListener("click", function() { 
    renderApp(25)
    inputPeople.addEventListener('input', function() {
        if (inputPeople.value < 1) {
            alertEl.textContent = "Can't be zero"
        } else{
            alertEl.textContent = ""
            renderApp(25)
        }
    }
    ) 
})

fftyBtn.addEventListener("click", function() { 
    renderApp(50)
    inputPeople.addEventListener('input', function() {
        if (inputPeople.value < 1) {
            alertEl.textContent = "Can't be zero"
        } else{
            alertEl.textContent = ""
            renderApp(50)
        }
    }
    ) 
})

customIn.addEventListener("input", function() { 
    renderApp(customIn.value)
    inputPeople.addEventListener('input', function() {
        if (inputPeople.value < 1) {
            alertEl.textContent = "Can't be zero"
        } else{
            alertEl.textContent = ""
            renderApp(customIn.value)
        }
    }
    ) 
})