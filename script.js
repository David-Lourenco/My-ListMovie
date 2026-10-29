const overlay = document.getElementById('modal-overlay');
const exit = document.getElementById('btn-exit');
const btnSearch = document.getElementById('search-button');

function btnOpen() {
    overlay.classList.add('visible','opacity-100');
   
   
}

function clickExit() {
    overlay.classList.remove('visible','opacity-100');
    overlay.classList.add('ease-in-out', 'duration-500', 'opacity-0')
   
}

btnSearch.addEventListener('click', btnOpen);
exit.addEventListener('click', clickExit)