function mudarImagem() {
    var text = window.document.getElementById('texto');
    text.style.fontSize = '30px';
    text.innerText = "OLHA QUE MARAVILHOSA!!";
    text.style.transition = "all 1.7s";
    var imagem = window.document.getElementById('imagem');
    imagem.src = "troca2.png";
    imagem.style.border = "2px solid black"
    var cor = window.document.getElementById('container');
    cor.style.backgroundColor = 'rgb(121, 6, 17)';
    cor.style.transition = "all 1.7s";

}