// pobiermay wszystkie potrzebne elementy z dom
const btnIncrease = document.querySelector('.bigger');
const btnDecrease = document.querySelector('.smaller');
const text = document.querySelector('p');

// okreslamy potrzebne dane

let textSize = 20;
text.style.fontSize = textSize + 'px';
text.style.backgroundColor = '#ddd'

//okreslenie akcji napisanie funkcji
function textIncrease() {
    textSize++;
    text.style.fontSize = textSize + 'px';
}
function textDecrease() {
    textSize--;
    text.style.fontSize = textSize + 'px';
}

// ustawianie nasluchiwania na przyciskach klikniecia

btnIncrease.addEventListener('click', textIncrease)
btnDecrease.addEventListener('click', textDecrease)
