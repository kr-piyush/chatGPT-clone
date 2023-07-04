let addChat =  document.querySelector(".list-container")
let addCont =  document.querySelector(".left-main-top")
let exampsC = document.querySelectorAll(".examp")
let inputEl = document.querySelector(".input")

addChat.addEventListener("click", function() {
    addCont.innerHTML += `<div class="new-chat">Chat 1</div>`
})

function push() {
    inputEl.value = "push inside the input"
}