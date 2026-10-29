const overlay = document.getElementById('modal-overlay');
const exit = document.getElementById('btn-exit');


function clickExit(){
    overlay.classList.remove('visible');
    overlay.classList.add('ease-in','duration-400','opacity-10')

}

exit.addEventListener('click' ,clickExit)

