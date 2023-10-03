const palavras = ["javascropt", "bootstrap", "progamacao"];
let tentaivasUsadas = 0;
let botoes = document.getElementById('botoes');
let letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let palavraSecreta, palavraOculta;

iniciarJogo();

function iniciarJogo() {
    botoes.innerHTML ="";
    for (let i = 0; i < letras.length; i++){
        botoes.innerHTML += `<button id='btn-${letras[i]}' class='btn btn-light me-1 mb-1' onclick='checarLetra("${letras[i]}")'>${letras[i]}</button>`
    }
    tentaivasUsadas = 0;
    palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
    /*console.log(palavraSecreta);*/
    palavraOculta = '';
    for (let i = 0; i < palavraSecreta.length; i++){
        palavraOculta += '- ';
    }
    document.querySelector('h2').innerHTML = palavraOculta;
}