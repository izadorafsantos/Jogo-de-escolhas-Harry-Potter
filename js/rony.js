function fase1rony() {
    var escolhajogador = prompt(`Digite 1 ou 2`);

    if (escolhajogador ==1) {
        window.location.href = "../html/ronygameover1.html";
    } else if (escolhajogador ==2){
        window.location.href = "../html/ronyescolha2.html";
    } else {
        alert (`Digite 1 ou 2`)
    }
}

function fase2rony() {
    var escolhajogador = prompt(`Digite 1 ou 2`);

    if (escolhajogador ==1) {
        window.location.href = "../html/ronyescolha3.html";
    } else if (escolhajogador ==2){
        window.location.href = "../html/ronygameover2.html";
    } else {
        alert (`Digite 1 ou 2`)
    }
}

function fase3rony() {
    var escolhajogador = prompt(`Digite 1 ou 2`);

    if (escolhajogador ==1) {
        window.location.href = "../html/ronygameover3.html";
    } else if (escolhajogador ==2){
        window.location.href = "../html/ronywin.html";
    } else {
        alert (`Digite 1 ou 2`);
    }
}

/* ------- GAMER OVER PARA O INÍCIO -------*/
let ronyreinicio1 = document.querySelector("#ronyreinicio1").onclick = function(){
    let ronyreinicio2 = document.querySelector("#ronyreinicio2");
    ronyreinicio2.setAttribute("href", "../index.html");
}
