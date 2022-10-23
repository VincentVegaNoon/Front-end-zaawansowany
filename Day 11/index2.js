const buttonJS = document.querySelector('.js');

buttonJS.addEventListener("click", function() {
const divItem = document.createElement('div');
// divItem.className = 'box';
divItem.classList.add('box');
// divItem.setAttribute("class", "box")
document.body.appendChild(divItem);
})