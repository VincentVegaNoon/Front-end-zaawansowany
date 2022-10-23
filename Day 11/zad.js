let rotate = 0
let degree = 10

const btn = document.querySelector('button')
const square = document.querySelector('.square')

btn.addEventListener('click', function() {
    square.style.transition = '0.5s'
    rotate = rotate + degree
    square.style.transform = 'rotate' + '(' + rotate + 'deg' + ')';
})