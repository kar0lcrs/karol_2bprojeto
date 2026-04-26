new Image().src = "img/golg5.png" // Carrega na memória antes da interação

/*Mostra fusca antigo ao deixar o mouse em cima*/
const fusca = document.getElementById("fuscaImg");

fusca.addEventListener("mouseenter", function() {
    fusca.src = "img/fuscaold.png";
});

fusca.addEventListener("mouseleave", function() {
    fusca.src = "img/fusca.png"
});

/*Muda imagem do gol ao passar o mouse em cima*/
const imagem = document.getElementById("gol_img")
/*Caminhos das fotos*/
const golnovo = "img/golg5.png";
const golvelho = "img/gol1980.png";

imagem.addEventListener("mouseenter", function() {
    //Se a imagem atual termina com o nome da antiga, troca pela nova
    if (imagem.src.includes(golvelho)) {
        imagem.src = golnovo;
    }
    else {
        imagem.src = golvelho;
    }
});

