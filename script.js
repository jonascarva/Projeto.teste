let darkmode = document.querySelector ('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace ('bx-moon', 'bx-sun');
        document.body.classList.add ('color');
    } else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('color');
    }
};

let menu = document.querySelector('#menu-icon');
let Links = document.querySelector ('.Links');

menu.onclick = () => {
    menu.classList.toggle ('bx-x');
    Links.classList.toggle ('open');
};

window.onscroll = () => {
    menu.classList.remove ('bx-x');
    Links.classList.remove('open');
};

/*--slides--*/

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

setInterval(next, 7000);