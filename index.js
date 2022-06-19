var botao = document.getElementById('clique');
botao.onclick = function(){
    if(botao.value === 'troca'){
        pers1.src = 'troca2.png';
        botao.value = 'Retornar';
        botao.innerHTML = '(Voltar)';
    }else{
        pers1.src = 'troca1.jpg';
        botao.value = 'troca';
        botao.innerHTML = '(Trocar)';
    }
}