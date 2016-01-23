/* Initialize */
var type = document.getElementById("type");
var description = document.getElementById("name");
var weight = document.getElementById("weight");
var phenylalanine = document.getElementById("phenylalanine");
var protein = document.getElementById("protein");
var energy = document.getElementById("energy");
var add = document.getElementById("add");
var calculate = document.getElementById("calculate");

function addListener(element, event, funct) {
    if (element.addEventListener) {
        return element.addEventListener(event, funct);
    } else if (element.attachEvent) {
        return element.attachEvent(event, funct);
    }
}

/* Save */
var save;
addListener(add, "click", save);

function save() {
    var day, id,
        date = new Date();

    if (localStorage.getItem("day") !== null) {
        day = JSON.parse(localStorage.getItem("day"));
        id = day[day.length - 1].id + 1;
    } else {
        day = [];
        id = 1;
    }

    var food = {
        "id": id,
        "date": date,
        "type": type.value,
        "desc": description.value,
        "wg": Number(weight.value),
        "phe": Number(phenylalanine.value),
        "prot": Number(protein.value),
        "kcal": Number(energy.value)
    };

    day.push(food);
    localStorage.setItem("day", JSON.stringify(day));
    window.location.assign("index.html");
}

/* Calculate */
var check, wgcalc, phecalc, protcalc, kcalcalc;
addListener(calculate, "click", check);

function check() {
    if (calculate.checked) {
        localStorage.setItem("weight", weight.value);
        localStorage.setItem("phenylalanine", phenylalanine.value);
        localStorage.setItem("protein", protein.value);
        localStorage.setItem("energy", energy.value);

        addListener(weight, "keyup", wgcalc);
        addListener(phenylalanine, "keyup", phecalc);
        addListener(protein, "keyup", protcalc);
        addListener(energy, "keyup", kcalcalc);
    }
}

function wgcalc() {
    phenylalanine.value = weight.value * localStorage.getItem("phenylalanine") / 100;
    protein.value = weight.value * localStorage.getItem("protein") / 100;
    energy.value = weight.value * localStorage.getItem("energy") / 100;
}

function phecalc() {

}

function protcalc() {

}

function kcalcalc() {

}
