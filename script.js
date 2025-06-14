let list = document.querySelectorAll('.item');
let count = list.length;
let active = 0;

function next() {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    active = active >= count - 1 ? 0 : active + 1;
    list[active].classList.add('active');
}

function prev() {
    let activeOld = document.querySelector('.active');
    activeOld.classList.remove('active');

    // Correção aplicada:
    active = active <= 0 ? count - 1 : active - 1;
    list[active].classList.add('active');
}