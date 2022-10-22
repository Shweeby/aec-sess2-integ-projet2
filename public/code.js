'use strict';

$("#loupe").on("click", function(){
    $("#fenetreRecherche").modal('show');
});
$(".close, #fermer, #sauvegarder").on("click", function(){
    $("#fenetreRecherche").modal('hide');
});

let finUrl = window.location.pathname;
console.log(finUrl);

// Rajouter juste un bg-primary dans la class du lien en cours
if (finUrl=="/") {
    let id = $("#accueil");
    id.addClass("active");
    id.attr("aria-current","page");
    //$("#accueil").children().css("color","black");
} else {
    //$("#"+finUrl.substring(1)).children().css("color","black");
    let id =  $("#"+finUrl.substring(1));
    id.addClass("active");
    id.attr("aria-current","page");
}


let range1 = document.getElementById("range1");
let range2 = document.getElementById("range2");
let range3 = document.getElementById("range3");
let range4 = document.getElementById("range4");

let attaque = document.getElementById("attaque");
let defense = document.getElementById("defense");
let sante = document.getElementById("sante");
let vitesse = document.getElementById("vitesse");

let reset = document.getElementById("reset");
let aleatoire = document.getElementById("aleatoire");

if (range1) {
    attaque.innerHTML = range1.value;
    range1.addEventListener("input", function () {
        attaque.innerHTML = range1.value;
    });
}

if (range2) {
    defense.innerHTML = range2.value;
    range2.addEventListener("input", function () {
        defense.innerHTML = range2.value;
    });
}

if (range3) {
    sante.innerHTML = range3.value;
    range3.addEventListener("input", function () {
        sante.innerHTML = range3.value;
    });
}

if (range4) {
    vitesse.innerHTML = range4.value;
    range4.addEventListener("input", function () {
        vitesse.innerHTML = range4.value;
    });
}

if (reset) {
    reset.addEventListener("click", function () {
        attaque.innerHTML = 5;
        defense.innerHTML = 5;
        sante.innerHTML = 5;
        vitesse.innerHTML = 5;
    });
}

if (aleatoire) {
    aleatoire.addEventListener("click", function () {
        range1.value = Math.floor(Math.random() * 10) + 1;
        range2.value = Math.floor(Math.random() * 10) + 1;
        range3.value = Math.floor(Math.random() * 10) + 1;
        range4.value = Math.floor(Math.random() * 10) + 1;
        attaque.innerHTML = range1.value;
        defense.innerHTML = range2.value;
        sante.innerHTML = range3.value;
        vitesse.innerHTML = range4.value;
    });
}

