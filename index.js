const elLi = document.querySelectorAll(".order__right-selector")
const elcards = document.querySelectorAll(".cards")
const elButton = document.querySelectorAll(".order__right-button2")
elLi.forEach(function(item, index){
    item.addEventListener("click", function(){
        elcards[index].classList.toggle("cards--open")
        elButton[index].classList.toggle("button2--active")
    }) 
})

// vazifa 2

// inputlar checked bolsa boxni ichidagi spanlar inputlarni valuesiga ozgarishi kerak

const elForm = document.querySelector(".order__form")

const elOrder1 = document.querySelector(".js--order1")
const elOrder2 = document.querySelector(".js--order2")
const elOrder3 = document.querySelector(".js--order3")
const elOrder4 = document.querySelector(".js--order4")
const elOrder5 = document.querySelector(".js--order5")

const elInputs = document.querySelectorAll(".input1")

elInputs.forEach(function(item){
    elForm.addEventListener("click", function(event){
        event.preventDefault
        if(item.checked && item.name === "input1"){
            elOrder1.textContent = item.value
        }
        if(item.checked && item.name === "input2"){
            elOrder2.textContent = item.value
        }
        if(item.checked && item.name === "input3"){
            elOrder3.textContent = item.value
        }
        if(item.checked && item.name === "input4"){
            elOrder4.textContent = item.value
        }
        if(item.checked && item.name === "input5"){
            elOrder5.textContent = item.value
        }
    })
})