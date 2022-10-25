const txt = document.querySelector('div.info');

function changeText() {
    console.log("ok");
    const scrollSize = window.scrollY;
    console.log(scrollSize)
    const SectionHeightOne = document.querySelector('.sekcja1').clientHeight;
    const SectionHeightTwo = document.querySelector('.sekcja2').clientHeight;
    const SectionHeightThree = document.querySelector('.sekcja3').clientHeight;
    const SectionHeightFour = document.querySelector('.sekcja4').clientHeight;
    console.log(SectionHeightThree)

const distanceFromSectionStart1 = document.querySelector('.sekcja1').offsetTop
const distanceFromSectionStart2 = document.querySelector('.sekcja2').offsetTop
const distanceFromSectionStart3 = document.querySelector('.sekcja3').offsetTop
const distanceFromSectionStart4 = document.querySelector('.sekcja4').offsetTop

if (scrollSize < SectionHeightOne) {
    txt.textContent = "sekcja 1"
} else if (scrollSize < SectionHeightTwo + distanceFromSectionStart2) {
    txt.textContent = "sekcja 2"
} else if (scrollSize < SectionHeightThree + distanceFromSectionStart3) {
    txt.textContent = "sekcja 3"
} else {
    txt.textContent = "sekcja 4"
}
}
window.addEventListener('scroll', changeText)