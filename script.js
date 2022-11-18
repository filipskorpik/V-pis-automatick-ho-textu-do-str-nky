"use strict"

let heading = document.querySelector(".heading")
let speed = document.querySelector("#speed")
let text = "Zvolte rychlost automaticky vypisovaného textu"
let idLetter = 1
let delay = 500 / speed.value

let printText = function(){
    heading.textContent = text.slice(0, idLetter)
    idLetter++
    if(idLetter > text.length){
        idLetter = 1
    }
    setTimeout(printText, delay)

}

printText()

speed.addEventListener("input", function(event){
    delay = 500 / event.target.value
})

