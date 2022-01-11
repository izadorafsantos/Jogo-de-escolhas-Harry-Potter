function fase1dobby() {
    var escolhajogador = prompt(`Digite 1 ou 2`);

    if (escolhajogador ==1) {
        window.location.href = "../html/gameoverdobby1.html";
    } else if (escolhajogador ==2){
        window.location.href = "../html/dobbyescolha2.html";
    } else {
        alert (`Digite 1 ou 2`)
    }
}

function fase2dobby() {
    var escolhajogador = prompt(`Digite 1 ou 2`);

    if (escolhajogador ==1) {
        window.location.href = "../html/dobbyescolha3.html";
    } else if (escolhajogador ==2){
        window.location.href = "../html/gameoverdobby2.html";
    } else {
        alert (`Digite 1 ou 2`)
    }
}

function fase3dobby() {
    var escolhajogador = prompt(`Digite 1 ou 2`);

    if (escolhajogador ==1) {
        window.location.href = "../html/gameoverdobby3.html";
    } else if (escolhajogador ==2){
        window.location.href = "../html/dobbywin.html";
    } else {
        alert (`Digite 1 ou 2`)
    }
}

/* ------- GAMER OVER PARA O INÍCIO -------*/
let dobbyreinicio1 = document.querySelector("#dobbyreinicio1").onclick = function(){
    let dobbyreinicio2 = document.querySelector("#dobbyreinicio2");
   dobbyreinicio2.setAttribute("href", "./index.html");
}