🎬 CineList - Gerenciador de Filmes e Playlist

Aplicação web desenvolvida em JavaScript Vanilla, Tailwind CSS e integrada com a OMDb API, que permite pesquisar filmes em tempo real, visualizar detalhes em um modal interativo e gerenciar uma playlist pessoal com persistência de dados local.

🚀 Funcionalidades

Pesquisa Dinâmica via OMDb API: Pesquisa por título e ano opcional com tratamento robusto de erros.

Validação de Entradas: Impede buscas vazias e valida o formato do ano do filme.

Modal Interativo: Exibe informações detalhadas do filme encontrado (Poster, Sinopse, Elenco, Gênero e Ano).

Prevenção de Duplicatas: Verifica se o filme já foi adicionado à playlist antes de inseri-lo novamente.

Cards Responsivos em Grid: Renderização dinâmica de novos cartões utilizando Tailwind CSS para um alinhamento perfeito.

Persistência Local (LocalStorage): Salva os filmes adicionados para que a playlist não se perca ao recarregar a página.

Remoção Individual: Cada cartão possui um botão de exclusão que remove o item tanto da tela quanto do array de dados e do localStorage.

🛠️ Tecnologias Utilizadas

HTML5 & CSS3;

Tailwind CSS (Estilização responsiva baseada em utility classes);

JavaScript (ES6+) (Assincronismo com async/await, manipulação do DOM e localStorage);

OMDb API (Base de dados externa de filmes);

Notie.js (Biblioteca para alertas visuais);

Gemini.

⚙️ Como Executar o Projeto

descarregue os ficheiros:


Configure a Chave da API:
Certifique-se de que possui uma chave gratuita da OMDb API configurada no seu ambiente de scripts (variável key).

Abra o projeto no VS Code:
Recomenda-se a utilização da extensão Live Server para executar a aplicação localmente no navegador (Google Chrome).

Inicie o Live Server:
Clique com o botão direito no ficheiro index.html e selecione "Open with Live Server".

📂 Estrutura Principal do Código

btnOpen(): Dispara a requisição assíncrona à API com tratamento de erros.

preenchimentoModal(): Atualiza o DOM do modal com os dados retornados.

upDataMovieList(): Cria dinamicamente os novos cartões de filmes na interface.

isMovieAlreadyList(): Valida se o filme já existe na playlist atual.

updateLocalStorage(): Sincroniza o array movieList com o armazenamento local do navegador.

👤 Autor

Desenvolvido por David Lourenço, com o apoio de mentoria técnica para otimização de código e estruturação de algoritmos.
