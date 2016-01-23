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
var calculate;
addListener(weight, "keyup", calculate);

function calculate() {
    var wg = document.getElementById("weight").value,
        phe = document.getElementById("phenylalanine").value,
        prot = document.getElementById("protein").value,
        kcal = document.getElementById("energy").value;
    phenylalanine.value = wg * phe / 100;
    protein.value = wg * prot / 100;
    energy.value = wg * kcal / 100;
    console.log(wg, phe, prot, kcal, "---", phenylalanine.value, protein.value, energy.value);
}
