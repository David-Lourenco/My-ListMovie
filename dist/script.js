const overlay = document.getElementById('modal-overlay');

const exit = document.getElementById('btn-exit');
const btnSearch = document.getElementById('search-button');

const movieName = document.getElementById('movie-name');
const movieYear = document.getElementById('movie-year');

const addButton = document.getElementById('add-button')

const movieListElement = document.getElementById('movie-list');

let curretMovie = {}; //variavel que guarda meu filme atual ou seja o que esta sendo pesquisado
let movieList = JSON.parse(localStorage.getItem('movieList'))??[];//variavel que guarda um lista vazia onde vai ser adicionado meus filmes


async function btnOpen() {
    try {
        let translateName  = await treatmentName(); //tratamento de erro , que manda executar o codigo abaixo,caso haja algum erro ele pula direto para o catch
        let url = `https://www.omdbapi.com/?apikey=${key}&t=${translateName}&y=${treatmentYear()}` //APi da OMDB

        const response = await fetch(url);
        const data = await response.json()
        console.log(data);
        if (data.Error) {
            throw new Error('Filme nao encontrado')
        }
        preenchimentoModal(data); //função que ao fazer a requisição a API preenche meu modal de acordo com as imformações que eu passei.
        
        
        overlay.classList.add('visible', 'opacity-100');

        movieName.value = ''; // para zerar o campo de pesquisa de nome apos click para pequisa.
        movieYear.value = '';// para zerar o campo de pesquisa de ano apos click para pequisa.

    } catch (error) {
        notie.alert({text:'PorFavor escreva o nome do filme'}) //ao aperta o botão de pesquisa sem preencher os dados irá aparecer uma notificação de erro vindo do top. Bibliotce usada notie.master.
    }
}

function clickExit() {
    overlay.classList.remove('visible', 'opacity-100');
    overlay.classList.add('ease-in-out', 'duration-500', 'opacity-0');
}

btnSearch.addEventListener('click', btnOpen);
exit.addEventListener('click', clickExit);



async function treatmentName() {
    if (movieName.value === '') {
        throw new Error('Porfavor digite o nome do filme')
    } 
    let textTranslate = await translate(movieName.value,'pt','en')

    return textTranslate.split(' ').join('+')
}

function treatmentYear() {
    if (movieYear.value === '') {
        return ''
    } if (movieYear.value.length !== 4) {
        throw new Error('O ano do filme é invalido')
    } return movieYear.value
}

function preenchimentoModal(data) {
    curretMovie = data
    document.querySelector('#title-movie h2').textContent = `${data.Title} - ${data.Year}`;
    document.querySelector('#movie-body img').src = data.Poster;
    document.querySelector('#movie-sinopse p').textContent = data.Plot;
    document.querySelector('#movie-cast p').textContent = data.Actors;
    document.querySelector('#movie-genero p').textContent = data.Genre;
}



function upDataMovieList(movieObject) {

    const movieCard = document.createElement('div');//cria uma tag div no meu HTML
    
    movieCard.className = "flex flex-col bg-slate-300 font-bold rounded-xl mx-2";//Adiciona class a DIV que eu criei

    //Cria adiciona toda uma estrutura HTML ao meu documento index+
    movieCard.innerHTML = ` 
        <h2 class="p-2">${movieObject.Title} - ${movieObject.Year}</h2> 
        <article id='movie-card-${movieObject.imdbID}' class="flex items-start">
            <img src="${movieObject.Poster}" alt="Poster do filme">
        </article>
        <button
        id="btnRemove" class="p-1  active:bg-red-500 active:rounded-b-xl">
            <i class="bi bi-trash3-fill"></i> Remover
        </button>
    `;
        const btnRemove = movieCard.querySelector('#btnRemove'); //funçaõ interna usada pra remover um card da playlist
        btnRemove.addEventListener('click',function(){
            movieCard.remove();
            movieList = movieList.filter( movie => movie.imdbID !== movieObject.imdbID)
            updataLocalStorage()
        });

    movieListElement.appendChild(movieCard);//Adiciona um elemento filho ao Elemento movieListElement
}

function addCurretMovieToList() { //Evita que voce coloque dois filmes iguais na sua lista 

    if (isMovieAlreadyList(curretMovie.imdbID)){
         notie.alert({ type: 'error', text: "Esse filme ja existe na lista", time: 1 });
         clickExit()
         return;
    }

    addToList(curretMovie);
    upDataMovieList(curretMovie);
    updataLocalStorage()
    clickExit()
}

function addToList(movieObject) {
    movieList.push(movieObject);
}

addButton.addEventListener('click', addCurretMovieToList);

function isMovieAlreadyList(id) { //tratamento de erro que evita que seja adicionado dois filmes do mesmo
    function doesThisIdBelongThisMovie(movieObjectie){
        return movieObjectie.imdbID === id;
    } {
        return Boolean (movieList.find(doesThisIdBelongThisMovie));
    }
    
}

function updataLocalStorage(){
    localStorage.setItem('movieList',JSON.stringify(movieList));
}

for (const movieInfo of movieList){
    upDataMovieList(movieInfo)
}

async function translate (texto, sourceLang = 'pt', targetLange = 'en') {
    let url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=${sourceLang}|${targetLange}`;//API My Memory Translate
    const response = await fetch(url);
    const data = await response.json();
  
    // Verificação de segurança para retornar o texto traduzido de verdade pela API
    if (data && data.responseData && data.responseData.translatedText) {
        return data.responseData.translatedText;
    }
    
    return texto; 
}