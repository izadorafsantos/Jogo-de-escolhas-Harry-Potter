function fase1snape() {
    var escolhajogador = prompt(`Digite 1 ou 2`);

    if (escolhajogador ==1) {
        window.location.href = "../html/gameoversnape1.html";
    } else if (escolhajogador ==2){
        window.location.href = "../html/snapeescolha2.html";
    } else {
        alert (`Digite 1 ou 2`)
    }
}

function fase2snape() {
    var escolhajogador = prompt(`Digite 1 ou 2`);

    if (escolhajogador ==1) {
        window.location.href = "../html/snapeescolha3.html";
    } else if (escolhajogador ==2){
        window.location.href = "../html/gameoversnape2.html";
    } else {
        alert (`Digite 1 ou 2`)
    }
}

function fase3snape() {
    var escolhajogador = prompt(`Digite 1 ou 2`);

    if (escolhajogador ==1) {
        window.location.href = "../html/gameoversnape3.html";
    } else if (escolhajogador ==2){
        window.location.href = "../html/snapewin.html";
    } else {
        alert (`Digite 1 ou 2`);
    }
}

/* ------- GAMER OVER PARA O INÍCIO -------*/
let snapereinicio1 = document.querySelector("#snapereinicio1").onclick = function(){
    let snapereinicio2 = document.querySelector("#snapereinicio2");
    snapereinicio2.setAttribute("href", "./index.html");
}
