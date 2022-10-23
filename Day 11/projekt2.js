let firstDiv = document.querySelector('.s1')
let secondDiv = document.querySelector('.s2')

function changeColor() {
// firstDiv.classList.toggle('red');
// secondDiv.classList.toggle('red');
this.classList.toggle('red')
console.log(this)
}
firstDiv.addEventListener('click', changeColor)
secondDiv.addEventListener('click', changeColor)