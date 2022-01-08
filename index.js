function f (text, optionA, optionB) {
    var escolha = prompt(text).toUpperCase();

    if(escolha === "A"){
        window.location.href = ./${optionA};
    } else if (escolha === "B"){ 
        window.location.href =  ./${optionB};
    } else {
        alert("Por favor se atenha as opções propostas");
        window.location.reload();
    }
}

function gameOver() {
    alert("Você morreu! Redirecionando para a página principal.");
    window.location.href = "index.html"
}

function vGameOver() {
    alert("Parabéns você venceu! Redirecionando para a página principal.")
    window.location.href = "index.html"
}