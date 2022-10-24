const burger = document.querySelector(".burger")
const bars = document.querySelector(".fa-bars")
const xmark = document.querySelector(".fa-xmark")
const column = document.querySelector("aside")

burger.addEventListener("click", function() {
    bars.classList.toggle("show")
    xmark.classList.toggle("show")
    column.classList.toggle("show")
})