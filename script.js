const overlay = document.getElementById('modal-overlay');
const exit = document.getElementById('btn-exit');
const btnSearch = document.getElementById('search-button');

const movieName = document.getElementById('movie-name')
const movieYear = document.getElementById('movie-year')

async function btnOpen() {
    overlay.classList.add('visible', 'opacity-100');

    const name = movieName.value.split(' ').join('+');
    const year = movieYear.value

    let url = `http://www.omdbapi.com/?apikey=${key}&t=${name}&${year}`

    const response = await fetch(url);
    const data = await response.json()
    console.log(data);
}

function clickExit() {
    overlay.classList.remove('visible', 'opacity-100');
    overlay.classList.add('ease-in-out', 'duration-500', 'opacity-0');

}

btnSearch.addEventListener('click', btnOpen);
exit.addEventListener('click', clickExit)

