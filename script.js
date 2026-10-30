const overlay = document.getElementById('modal-overlay');
const exit = document.getElementById('btn-exit');
const btnSearch = document.getElementById('search-button');

const movieName = document.getElementById('movie-name')
const movieYear = document.getElementById('movie-year')

async function btnOpen() {

    try { //tratamento de erro , que manda executar o codigo abaixo,caso haja algum erro ele pula direto para o catch
        let url = `http://www.omdbapi.com/?apikey=${key}&t=${treatmentName()}&y=${treatmentYear()}`
        
        const response = await fetch(url);
        const data = await response.json()
        console.log(data);
        overlay.classList.add('visible', 'opacity-100');

    } catch (error) {
        notie.alert({ type: 'error', text: error.message }); //ao aperta o botão de pesquisa sem preencher os dados irá aparecer uma notificação de erro vindo do top. Bibliotce usada notie.master.
    }

}

function clickExit() {
    overlay.classList.remove('visible', 'opacity-100');
    overlay.classList.add('ease-in-out', 'duration-500', 'opacity-0');
}

function treatmentName() {
    if (movieName.value === '') {
        throw new Error('Porfavor digite o nome do filme')
    } return movieName.value.split(' ').join('+')
}
function treatmentYear() {
    if (movieYear.value === '') {
        return ''
    } if (movieYear.value.length !== 4) {
        throw new Error('O ano do filme é invalido')
    } return movieYear.value
}


btnSearch.addEventListener('click', btnOpen);
exit.addEventListener('click', clickExit)

