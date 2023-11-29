// const elLi = document.querySelectorAll(".order__right-selector")
const elUl = document.querySelector(".order__right-lists")
const elcards = document.querySelectorAll(".cards")
const elButton = document.querySelectorAll(".order__right-button2")
elUl.addEventListener("click", function(event){
    const elLi = event.target.closest(".order__right-item")
    if(elLi){
        elLi.querySelector(".cards").classList.toggle("cards--open")
        elLi.querySelector(".order__right-button2").classList.toggle("button2--active")

    }

})
// elLi.forEach(function(item, index)
//     item.addEventListener("click", function(){
//         elcards[index].classList.toggle("cards--open")
//         elButton[index].classList.toggle("button2--active")
//     }) 
// })


const elForm = document.querySelector(".order__form")

const elOrder1 = document.querySelector(".js--order1")
const elOrder2 = document.querySelector(".js--order2")
const elOrder3 = document.querySelector(".js--order3")
const elOrder4 = document.querySelector(".js--order4")
const elOrder5 = document.querySelector(".js--order5")

const elInputs = document.querySelectorAll(".input1")



elForm.addEventListener("change", function(event){
    event.preventDefault
    if(event.target.name === "input1"){
        elOrder1.textContent = event.target.value
    }
    if(event.target.name === "input2"){
        elOrder2.textContent = event.target.value
    }
    if(event.target.name === "input3"){
        elOrder3.textContent = event.target.value
    }
    if(event.target.name === "input4"){
        elOrder4.textContent = event.target.value
    }
    if(event.target.name === "input5"){
        elOrder5.textContent = event.target.value
    }
})
