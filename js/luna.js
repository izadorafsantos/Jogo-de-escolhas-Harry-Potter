function fase1luna() {
    var escolhajogador = prompt(`Digite 1 ou 2`);

    if (escolhajogador ==1) {
        window.location.href = "../html/gameoverluna1.html";
    } else if (escolhajogador ==2){
        window.location.href = "../html/lunaescolha2.html";
    } else {
        alert (`Digite 1 ou 2`)
    }
}

function fase2luna() {
    var escolhajogador = prompt(`Digite 1 ou 2`);

    if (escolhajogador ==1) {
        window.location.href = "../html/gameoverluna2.html";
    } else if (escolhajogador ==2){
        window.location.href = "../html/lunaescolha3.html";
    } else {
        alert (`Digite 1 ou 2`)
    }
}

function fase3luna() {
    var escolhajogador = prompt(`Digite 1 ou 2`);

    if (escolhajogador ==1) {
        window.location.href = "../html/gameoverluna3.html";
    } else if (escolhajogador ==2){
        window.location.href = "../html/lunawin.html";
    } else {
        alert (`Digite 1 ou 2`);
    }
}
