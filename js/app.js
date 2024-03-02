let gamesAlugados = 0;

function contadorDeGames() {
    console.log(`Total de Games alugados: ${gamesAlugados}`);
}

function alterarStatus(id) {
    let gameClick = document.getElementById(`game-${id}`);
    let image = gameClick.querySelector('.dashboard__item__img');
    let button = gameClick.querySelector('.dashboard__item__button');
    let gameName = gameClick.querySelector('.dashboard__item__name');


    if (image.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${gameName.textContent}?`)) {
            image.classList.remove('dashboard__item__img--rented');
            button.classList.remove('dashboard__item__button--return');
            button.textContent = 'Alugar';
            gamesAlugados--;
        }
    } else { (confirm(`Você tem certeza que deseja alugar o jogo ${gameName.textContent}?`))
        image.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.textContent = 'Devolver';
        gamesAlugados++;
    }
    contadorDeGames();

}

document.addEventListener('DOMContentLoaded', function() {
    gamesAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contadorDeGames();
});