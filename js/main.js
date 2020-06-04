

// Main page scroll animation
//Select Element
const selectElm = function (element) {
    return document.querySelector(element);
}

let menuToggler = selectElm('.menu-toggle');
let body = selectElm('body');

menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
})







// Scroll reveal
const sr=ScrollReveal()
sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});


sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 600
});
sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});





