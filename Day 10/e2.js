window.addEventListener('scroll', function () {
    console.log('skrolujesz o ' + window.scrollY + 'px')
})
function showScrollSize() {
    console.log("skrolujesz o " + window.scrollY + "px")
}
window.addEventListener('scroll', showScrollSize)

const spanResult = document.querySelector('span');

document.addEventListener('scroll', function () {
    spanResult.textContent = window.scrollY;
})