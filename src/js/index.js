 /*
    OBJETIVO - Quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto e mostrar o cartão correspondente ao que foi se4leciuonado na listagem

    PASSO 1 - Precisamos criar uma variável no JS pra trrabalhar com a listagem de pokedevs
    
    PASSO 2 - Identificar o envento de clique no elemento da listagem

    PASSO 3 - Remover a classe aberto só do cartão que tá aberto

    PASSO 4 - Ao clicar em um pokedev da lista pegamos o ID desse pokedev para saber qual catão abrir

    PASSO 5 - Remover a classe ativo que marca o pokedev selecionado na listagem

    PASSO 6 -  Adicionar a classe ativo no pokedev selecionado na listagem
 */

//PASSO 1 - Precisamos criar uma variável no JS pra trrabalhar com a listagem de pokedevs
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

//PASSO 2 - Identificar o envento de clique no elemento da listagem
listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener ("click", () => {
        //PASSO 3 - Remover a classe aberto só do cartão que tá aberto
        esconderCartaoPokedev();

        //PASSO 4 - Ao clicar em um pokedev da lista pegamos o ID desse pokedev para saber qual catão abrir
        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

        //PASSO 5 - Remover a classe ativo que marca o pokedev selecionado na listagem
        desativarPokedevNaListagem();

        //PASSO 6 -  Adicionar a classe ativo no pokedev selecionado na listagem
        ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);
        
    })
})

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNaListagem.classList.add("ativo");
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;

    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}
