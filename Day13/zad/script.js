const arrow = document.querySelector('.arrow')
const nav = document.querySelector('nav')
arrow.addEventListener('click', function() {
    arrow.classList.toggle('moved')
    nav.classList.toggle('moved')
})