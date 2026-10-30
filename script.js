const overlay = document.getElementById('modal-overlay');
const exit = document.getElementById('btn-exit');
const btnSearch = document.getElementById('search-button');

const movieName = document.getElementById('movie-name')
const movieYear = document.getElementById('movie-year')

async function btnOpen()
{
    try {
        overlay.classList.add('visible', 'opacity-100');
        let url = `http://www.omdbapi.com/?apikey=${key}&t=${treatmentName()}&y=${treatmentYear()}`
        console.log(url);
        

        const response = await fetch(url);
        const data = await response.json()
        console.log(data);

    } catch (error) {
        console.error(error.message);
    }

}

function clickExit() {
    overlay.classList.remove('visible', 'opacity-100');
    overlay.classList.add('ease-in-out', 'duration-500', 'opacity-0');
}
function treatmentName()
{
    if (movieName.value === '') {
        throw new Error('Porfavor digite o nome do filme')
    } return movieName.value.split(' ').join('+')
}
function treatmentYear()
{
    if (movieYear.value === ''){
        return  ''
    }if(movieYear.value.length !== 4){
        throw new Error ('O ano do filme é invalido')
    }return movieYear.value
}


btnSearch.addEventListener('click', btnOpen);
exit.addEventListener('click', clickExit)

