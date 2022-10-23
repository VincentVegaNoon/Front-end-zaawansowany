const btn = document.querySelector('button');
const paragraph = document.querySelector('p')
document.querySelector('button').addEventListener
btn.addEventListener('click', function () {
    console.log('klik!');
    paragraph.style.backgroundColor = "red";
})

btn.addEventListener('mouseover', function () {
    console.log("najechanie");
})

let clicksNumber = 0;

btn.addEventListener('click', function () {
    // clicksNumber = clicksNumber + 1;
    clicksNumber++;
    console.log("klik numer: ", clicksNumber)
})